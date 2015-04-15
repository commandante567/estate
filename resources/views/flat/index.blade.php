@extends('_layouts.main')

@section('content')
    <div class="gallery">
        <img src="http://lorempixel.com/740/355" alt="" />
    </div>
    <div class="title">
        <h1>{{$flat->adress}}</h1>
        <h3>{{$flat->price}} руб.</h3>
    </div>
    <div class="desc">
        <h2>Описание</h2>
        <p>{{$flat->comment}}</p>
    </div>
    <div class="staff">
        <h2>Параменты Обьекта</h2>
        <table>
            <tr>
                <td>Метро</td>
                <td>{{$flat->road}}</td>
            </tr>
            <tr>
                <td>Комнаты</td>
                <td>{{$flat->room}}</td>
            </tr>
            <tr>
                <td>Этаж</td>
                <td>{{$flat->floor}}</td>
            </tr>
            <tr>
                <td>Площадь общая</td>
                <td>{{$flat->sall}}</td>
            </tr>
            <tr>
                <td>Площадь Жилая</td>
                <td>{{$flat->slive}}</td>
            </tr>
            <tr>
                <td>Площадь комнат</td>
                <td>{{$flat->sroom}}</td>
            </tr>
        </table>
    </div>
    <div class="icons">
        <p>Тут еще можно про телевизор, холодильник, мебель, метро</p>
    </div>
    <div class="map">
        <h2>На Карте</h2>
    </div>
@stop
