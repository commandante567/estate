<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateFlatsTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('flats', function(Blueprint $table)
		{
			$table->increments('id');
            $table->decimal('room',1,0);
            $table->string('adress');
            $table->string('road');
            $table->string('floor');
            $table->decimal('sall',3,0);
            $table->string('slive');
            $table->string('sroom');
            $table->boolean('phone')->default(0);
            $table->boolean('fur')->default(0);
            $table->boolean('fridge')->default(0);
            $table->boolean('metro')->default(1);
            $table->string('time');
            $table->string('agent');
            $table->string('contact');
            $table->text('comment');
            $table->string('price');
			$table->timestamps();
		});
	}

	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		//
        Schema::drop('flats');
	}

}
