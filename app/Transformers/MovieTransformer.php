<?php

namespace App\Transformers;

use App\Entities\Movie;
use League\Fractal\TransformerAbstract;

/**
 * Class MovieTransformer.
 *
 * @package namespace App\Transformers;
 */
class MovieTransformer extends TransformerAbstract
{
    /**
     * Transform the Movie entity.
     *
     * @param \App\Entities\Movie $model
     *
     * @return array
     */

    const IMAGE_URL = 'https://image.tmdb.org/t/p/w500';

    public function transform(Movie $model)
    {
        return [
            'id' => (int)$model->id,
            'title' => $model->title,
            'overview' => $model->overview,
            'poster_path' => self::IMAGE_URL . $model->poster_path,
            'backdrop_path' => self::IMAGE_URL . $model->backdrop_path,
            'release_date' => $model->created_at,
            'genres' =>$model->genres()->select('name')->get(),
            'created_at' => $model->created_at,
            'updated_at' => $model->updated_at
        ];
    }
}
