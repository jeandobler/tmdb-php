<?php

namespace Tests\Feature;

use App\Entities\Movie;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class MoviesTest extends TestCase
{

    use RefreshDatabase;

    /**
     * A basic test example.
     *
     * @return void
     */
    public function testGetAll()
    {

        factory(Movie::class, 3)->create();
        $item = Movie::get();

        $response = $this->get('/api/movies');

        $response->assertStatus(200);
        $response->assertJson([
                "data" => [
                    [
                        "id" => $item[0]->id,
                        "title" => $item[0]->title,
                        "overview" => $item[0]->overview,
                        "release_date" => $item[0]->release_date
                    ],

                    [
                        "id" => $item[1]->id,
                        "title" => $item[1]->title,
                        "overview" => $item[1]->overview,
                        "release_date" => $item[1]->release_date
                    ],

                    [
                        "id" => $item[2]->id,
                        "title" => $item [2]->title,
                        "overview" => $item[2]->overview,
                        "release_date" => $item[2]->release_date
                    ],


                ]
            ]

        );
    }

}
