<?php namespace App;

use Illuminate\Database\Eloquent\Model;

use App\Image;

class Flat extends Model {

	//
    protected $fillable = [
        'room',
        'adress',
        'road',
        'floor',
        'sall',
        'slive',
        'sroom',
        'phone',
        'fur',
        'fridge',
        'metro',
        'time',
        'agent',
        'contact',
        'comment',
        'price',
        'lat',
        'long'
    ];
    protected $hidden = [
        'agent',
        'contact',
        'comment'
    ];


    public function albums()
    {
        return $this->hasMany('Image');
    }

}
