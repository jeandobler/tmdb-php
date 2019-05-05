<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

/**
 * Class CreateGenresTable.
 */
class CreateMovieGenresTable extends Migration
{
	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('movie_genres', function(Blueprint $table) {
            $table->increments('id');
            $table->integer('movie_id')->unsigned();
            $table->integer('genre_id')->unsigned();

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
		Schema::drop('movie_genres');
	}
}
