<?php namespace App\Services;

use App\Flat;

class FlatSearchService {

    public function search($data = array()) {


        $limit = 10;
        $road = isset($data['road']) ? $data['road'] : "" ;
        $rooms = isset($data['room']) ? $data['room'] : [];
        $min_cost = isset($data['min_price']) ? $data['min_price'] : "" ; 
        $max_cost = isset($data['max_price']) ? $data['max_price'] : "" ;
        $type = isset($data['type']) ? $data['type'] : '';

        $baseQuery = Flat::take($limit);

        if($rooms) {
            $l = json_decode($rooms,true);
            if(!empty($l)) {
                $baseQuery->whereIn('pure_room', $l);
            }
        }

        if($type && $type != 'all') {
            $baseQuery->where('type', '!=', '')
                      ->where('type','=', $type);
        }

        if($road){
            $baseQuery->where('road', '!=', '')
                      ->where('road','LIKE', "%$road%");
        }

        

        if($min_cost || $max_cost) {
            $min_cost = json_decode($min_cost, true);
            $max_cost = json_decode($max_cost, true);
            $baseQuery->where('price', '!=', '')
                      ->where('price', '>=', $min_cost)
                      ->where('price', '<=', $max_cost);
        }


        return $baseQuery->paginate($limit);
    }


}

