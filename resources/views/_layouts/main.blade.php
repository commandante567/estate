<html>
    @include('_partians.head')

    <body>
    @include('_partians.header')

    <section class="breadcrumbs">
        <div class="container">
            <nav class="bread">
                <ul>
                    <li>bread</li>
                </ul>
            </nav>
        </div>
    </section>

        <section class="main-content">
            <div class="container">
                <div class="content">
                    @yield('content')
                </div>
            </div>
        </section>
    
    @include('_partians.footer')
    </body>
</html>
