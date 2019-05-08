<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */
use Illuminate\Support\Str;
use Faker\Generator as Faker;

/*
|--------------------------------------------------------------------------
| Model Factories
|--------------------------------------------------------------------------
|
| This directory should contain each of the model factory definitions for
| your application. Factories provide a convenient way to generate new
| model instances for testing / seeding your application's database.
|
*/

$factory->define(\App\Entities\Movie::class, function (Faker $faker) {
    return [

        'tmdb_id' =>$faker->unique()->numberBetween(),
        'title' =>$faker->title(),
        'overview'=>$faker->paragraph(),
        'poster_path' =>$faker->imageUrl(),
        'backdrop_path'=>$faker->imageUrl(),
        'release_date'=>$faker->date(),

    ];
});
