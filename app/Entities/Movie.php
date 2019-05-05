<?php

namespace App\Entities;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Prettus\Repository\Contracts\Transformable;
use Prettus\Repository\Traits\TransformableTrait;

/**
 * Class Movie.
 *
 * @package namespace App\Entities;
 */
class Movie extends Model implements Transformable
{
    use TransformableTrait;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'tmdb_id',
        'title',
        'overview',
        'poster_path',
        'backdrop_path',
        'release_date',
    ];

    protected $dates = ['release_date'];

    protected $casts = [
        'tmdb_id' => 'integer',
        'title' => 'string',
        'overview' => 'string',
        'poster_path' => 'string',
        'backdrop_path' => 'string',
    ];

    public function genres()
    {
       return  $this->belongsToMany(Genre::class, MovieGenre::class);
    }

}
