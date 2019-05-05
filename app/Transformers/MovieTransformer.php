<?php

namespace App\Transformers;

use League\Fractal\TransformerAbstract;
use App\Entities\Movie;

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
    public function transform(Movie $model)
    {
        return [
            'id'         => (int) $model->id,
            'title'         => (int) $model->id,
            'overview'         => (int) $model->id,
            'genres'         =>  $model->genres()->get(),


            'release_date' => $model->created_at,
            'created_at' => $model->created_at,
            'updated_at' => $model->updated_at
        ];
    }
}
