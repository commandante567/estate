<form action="/flat/" method="GET">
 
        {!! Form::select('road',$stantions , null, array('id' => 'road', 'class' => 'form-control' )) !!}

        {!! Form::select('room', [''=>'0','1'=>'1','2'=>'2'], null, array('id' => 'room', 'class' => 'form-control'))!!}

    <input type="number" value="5000" step="1000" name="min_cost" id="min_cost">
    <input type="number" value="30000" step="1000" name="max_cost" id="max_cost">

    <button type="submit">OK</button>
</form>
