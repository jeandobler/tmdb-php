<?php

namespace App\Criteria;

use Illuminate\Http\Request;
use Prettus\Repository\Contracts\CriteriaInterface;
use Prettus\Repository\Contracts\RepositoryInterface;

/**
 * Class SearchMovieCriteriaCriteria.
 *
 * @package namespace App\Criteria;
 */
class SearchMovieCriteria implements CriteriaInterface
{
    private $query;




    public function apply($model, RepositoryInterface $repository)
    {
        $request = app(Request::class);
        $this->query = $request->get("query");


        if ($this->query) {
            $model = $model->where('title', 'like', "%{$this->query}%");
        }

        return $model;
    }
}
