<?php

namespace App\Entities;

use Illuminate\Database\Eloquent\Model;

class MovieGenre extends Model
{
    protected $fillable = [
        'movie_id',
        'genre_id',
    ];


    public function movie()
    {
        return $this->hasOne(Movie::class);
    }

    public function genre()
    {
        return $this->hasOne(Genre::class);
    }


}
