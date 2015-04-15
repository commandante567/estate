@extends('_layouts.front-page')

@section('flats')
    <div class="section-caption">
    <h1>Последние поступления</h1>
    </div>
    @include('_partians.search_form')
    <div class="flats-grid cf">
        @foreach($flats as $flt)
        <div class="flat-item">
            <div class="flat-address">
                <h2>{{$flt->adress}}</h2>
            </div>
            <div class="wrw">
                {{ $flt->room[0]}}
            </div>
                <div class="flat-image">
                    <a href="/flats/{{$flt->id}}"><img src="http://lorempixel.com/220/165" alt="" /></a>
                </div>
                <div clas="flat-price">
                    <h3>{{$flt->price}} руб.</h3>
                </div>
                <div class="flat-tags cf">
                    <ul>
                        <li>Площадь: {{$flt->sall}}</li>
                        <li>Комнаты: {{$flt->room}}</li>
                    </ul>
                </div>
                <div class="flat-tags cf">
                    <ul>
                        <li>Метро: {{$flt->road}}</li>
                    </ul>
                </div>
        </div>
        @endforeach
    </div>
@stop

@section('content')
    <div class="section-caption">
    <h1> Как вариант</h1>
    <p>Тут может быть вступительное слово, какие мы хорошие крутые и все такое</p>
@stop
