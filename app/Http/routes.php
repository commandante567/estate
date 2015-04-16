<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/

/*Route::get('/', 'WelcomeController@index');

Route::get('home', 'HomeController@index'); */

Route::get('flats/{flat_id}', 'WelcomeController@flat');

/*
Route::get('/flat/search' , 'FlatsController@search');

Route::get('/flat/', 'FlatsController@index');

Route::get('/react/','FlatsController@react');

 */

Route::get('/','FlatsController@app');

//Route::get('test','WelcomeController@json');

//Route::get('test','WelcomeController@json');

Route::controllers([
	'auth' => 'Auth\AuthController',
	'password' => 'Auth\PasswordController',
]);


Route::group(['namespace' => 'Api', 'prefix' => 'api'], function() {
    Route::post('/flats/search', 'ApiController@flatSearch');

    Route::post('/flats/id', 'ApiController@flatId');

    Route::post('/mail/callback', 'ApiController@callBack');

    Route::get('/mail/callback', 'ApiController@callBack');

  /*  Route::get('/flats/geocode','ApiController@geocode');

    Route::get('/flats/type', 'ApiController@type');

    Route::get('/flats/pure', 'ApiController@pure');
*/
});
