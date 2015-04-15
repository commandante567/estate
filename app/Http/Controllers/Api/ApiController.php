<?php namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Flat;
use App\Services\FlatSearchService;
use App\Http\Requests\FlatRequest;

class ApiController extends Controller {

    /*
    |--------------------------------------------------------------------------
    | Api Controller
    |--------------------------------------------------------------------------
    |
    |
     */

    public function __construct() {

    }

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function token()
    {
        return csrf_token();
    }

    public function flatSearch(FlatRequest $request) {

        $js = $request->all();

        $flatSearchService = new FlatSearchService;

        $results = $flatSearchService->search($js);

        return $results;

    }

    public function flatId(FlatRequest $request) {


        $js = $request->all();


        $flat = Flat::where('id','=', $js['id'])->get();

        return $flat;

    }


    public function geocode(Flat $flat){

        $limit = 2000;
        $flats =  $flat->take($limit)->get();

        foreach($flats as $f){

            if(!$f->lat) {
                $geo = $f->adress;
                $geo = str_replace(' ', '+',$geo);
                $link ='http://geocode-maps.yandex.ru/1.x/?format=json&geocode=Санкт-Петербург+'. $geo;
                $json = file_get_contents($link);
                $obj = json_decode($json);

                if ($obj->response->GeoObjectCollection->metaDataProperty->GeocoderResponseMetaData->found > 0)
                {
                    $red = explode(' ',$obj->response->GeoObjectCollection->featureMember[0]->GeoObject->Point->pos);


                    $f['long'] = $red[0];
                    $f['lat'] = $red[1];

            /*$f['gimg'] = 'https://maps.googleapis.com/maps/api/streetview?size=400x400&location='. $f['lat'] .','. $f['long'];
            $img = file_get_contents($f['gimg']);

            $filename = str_random(12);
            $fp = fopen(public_path('flats/') . $filename .'.jpg', 'a');
            fwrite($img,$fp);
            fclose($fp);
             */
                } else {

                    $f['long'] = 'error';
                    $f['lat'] = 'error';
                }
                $f->save();

            }

        }
        return $flats;
    }

    public function type(Flat $flat) {
    
        $limit = 20000;
        $flats =  $flat->take($limit)->get();

        foreach($flats as $f){
        
            if(strlen($f['room']) > 1) {
                $f['type'] = 'room';
            } else {
                $f['type'] = 'flat';
            }
            $f->save();
        }
        return $flats;
    }

    public function pure(Flat $flat) {
    
        $limit = 20000;
        $flats =  $flat->take($limit)->get();

        foreach($flats as $f){
        
            $pure = $f['room'][0];

            $f['pure_room'] = $pure;

            $f->save();
        }
        return $flats;
    }
}
