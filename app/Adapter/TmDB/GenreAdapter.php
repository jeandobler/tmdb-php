<?php


namespace App\Adapter\TmDB;


class GenreAdapter extends Core
{
    public $request;
    private $url = '/genre/movie/list';


    public function getList()
    {
        return $this->request('get', $this->url);
    }

}
