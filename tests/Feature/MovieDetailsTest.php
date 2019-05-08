<?php

namespace Tests\Feature;

use App\Entities\Movie;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class MovieDetailsTest extends TestCase
{

    use RefreshDatabase;


    public function testFindOne()
    {

        $item = factory(Movie::class, 1)->create()->first();

        $response = $this->get('/api/movies/' . $item->id);

        $response->assertStatus(200);
        $response->assertJson([
                "data" =>
                    [
                        "id" => $item->id,
                        "title" => $item->title,
                        "overview" => $item->overview,
                        "release_date" => $item->release_date
                    ]
            ]

        );
    }

    public function testNotFoundOne()
    {

        $response = $this->get('/api/movies/123123123');

        $response->assertStatus(404);

    }

}
