@extends('_layouts.main')

@section('content')
    @include('_partians.search_form')
    <div class="flats-grid cf">
        @foreach($flats as $flt)
        <div class="flat-item">
            <div class="flat-address">
                <h2>{{$flt->adress}}</h2>
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
    <div class="pagination-wrap">
        {!! $flats->appends(Request::all())->render() !!}
    </div>
@stop
