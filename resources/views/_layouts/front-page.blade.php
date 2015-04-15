<html>
    @include('_partians.head')

    <body>
    @include('_partians.header') 

    <section class="main-slider">
        <div class="container">
            <div class="caption">
                <h1>Все квартиры за<br>8 000 рублей ! </h1>
            </div>
        </div>
    </section>

    <section class="last-flats">
        <div class="container">
            @yield('flats')
        </div>
    </section>
        <div class="container">
            <div class="content">
                @yield('content')
            </div>
        </div>
    </body>
</html>
