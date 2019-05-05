<?php

namespace App\Repositories;

use App\Adapter\TmDB\DiscoverAdapter;
use App\Criteria\SearchMovieCriteria;
use App\Entities\Movie;
use App\Entities\MovieGenre;
use App\Presenters\MoviePresenter;
use Illuminate\Support\Arr;
use Prettus\Repository\Eloquent\BaseRepository;

/**
 * Class MovieRepositoryEloquent.
 *
 * @package namespace App\Repositories;
 */
class MovieRepositoryEloquent extends BaseRepository implements MovieRepository
{
    /**
     * Specify Model class name
     *
     * @return string
     */
    public function model()
    {
        return Movie::class;
    }

    public function presenter()
    {
        return MoviePresenter::class;
    }


    public function boot()
    {
        $this->pushCriteria(SearchMovieCriteria::class);
        parent::boot();
    }

    public function getPaged($array)
    {
        $this->sycnToDatabase($array);
        return $this->paginate(Arr::get($array, 'limit'));
    }


    private function sycnToDatabase($array)
    {
        $adapter = app(DiscoverAdapter::class);
        try {
            $movies = ($adapter->getList($array));

            if ($movies->results != null && count($movies->results) > 0) {
                foreach ($movies->results as $movie) {
                    $arr = (array)$movie;
                    $arr['tmdb_id'] = $arr ['id'];

                    $movieFound = $this->model->firstOrCreate(['tmdb_id' => $arr['tmdb_id']],
                        array_filter($arr, function ($s) {
                            return in_array($s, $this->model->getFillable());
                        }, ARRAY_FILTER_USE_KEY));


                    foreach ($arr['genre_ids'] as $genre_id) {
                        $inserted = MovieGenre::firstOrCreate([
                            'movie_id' => $movieFound->id,
                            'genre_id' => $genre_id
                        ]);

                    }

                }
            }
        } catch (\Exception $e) {
            dd($e->getMessage());
        }
    }


}
