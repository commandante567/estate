<?php namespace App\Http\Controllers;

use App\Flat;

class WelcomeController extends Controller {

	/*
	|--------------------------------------------------------------------------
	| Welcome Controller
	|--------------------------------------------------------------------------
	|
	| This controller renders the "marketing page" for the application and
	| is configured to only allow guests. Like most of the other sample
	| controllers, you are free to modify or remove it as you desire.
	|
	*/

	/**
	 * Create a new controller instance.
	 *
	 * @return void
	 */
	public function __construct()
	{
		$this->middleware('guest');
	}

	/**
	 * Show the application welcome screen to the user.
	 *
	 * @return Response
	 */
	public function index()
	{
        $flats = Flat::take(6)->get();

        $f_stantions = ['Василеостровская'=>'Василеостровская','Приморская'=>'Приморская'];
        $f_rooms = ['1', '2', '3'];

        return view('welcome')->with([
            'flats' => $flats,
            'stantions' => $f_stantions,
        ]);
	}

    public function flat($flat_id) {

        $flat = Flat::where('id', $flat_id)->firstOrFail();

        return view('flat.index')->with([
            'flat' => $flat,
        ]);
    }

    
    public function json() {

    function tinyi($char) {
            if($char == '+') {
                return 1;
            } else {
                return 0;
            }

        }

        $json_string = file_get_contents('http://av.home/base.json');

        $rows = json_decode($json_string);

        foreach($rows as $row) {

            $data = [
                'room' =>   $row->rooms,
                'adress' => $row->adress,
                'road' =>   $row->metro,
                'floor' =>  $row->floor,
                'sall' =>   $row->sall,
                'slive' =>  $row->slive,
                'sroom' =>  $row->sroom,
                'phone' =>  tinyi($row->phone),
                'fur' =>    tinyi($row->fur),
                'fridge' => tinyi($row->fridge),
                'metro' =>  tinyi($row->near_metro),
                'time' =>   $row->srok,
                'agent' =>  $row->agent,
                'contact' =>    $row->contact,
                'comment' =>    $row->comment,
                'price' =>      $row->cost
            ];

            Flat::create($data);
        }

        return view('test')->with([
            'rows' => $rows,
        ]);

    }



}
