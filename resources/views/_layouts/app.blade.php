<html>
    @include('_partians.head')

    <body>
    <div class="main-wrap">
    @include('_partians.app-leftbar')
                <section class="app">
                    @yield('content')
                </section>
    </div>
    </body>
</html>
