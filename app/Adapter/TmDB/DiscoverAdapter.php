<?php


namespace App\Adapter\TmDB;


use Illuminate\Support\Arr;

class DiscoverAdapter extends Core
{
    public $request;
    private $url = '/discover/movie';
    private $url_search = '/search/movie';


    public function getList($array)
    {

        if (Arr::get($array, 'query')) {
            $request = $this->request('get', $this->url_search, $array);
        } else {
            $request = $this->request('get', $this->url, $array);
        }


        return $request;
    }

}
