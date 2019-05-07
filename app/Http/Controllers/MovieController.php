<?php

namespace App\Http\Controllers;

use App\Repositories\MovieRepository;
use Illuminate\Http\Request;

/**
 * @group Movies
 *
 * APIs for managing movies
 */
class MovieController extends Controller
{

    /**
     * @var MovieRepository
     */
    public $repository;
    /**
     * @var Request
     */
    public $request;
    private $findOnly = ['query', 'page'];

    public function __construct(MovieRepository $repository, Request $request)
    {
        $this->request = $request;
        $this->repository = $repository;
    }


    /**
     * List Movies
     *
     * @queryParam query string, search movies by name.
     * @queryParam page int, used to paginate.
     */
    public function index()
    {
        return $this->repository->getPaged($this->request->only($this->findOnly));
    }

    /**
     * Show Movie
     *
     *
     */
    public function show($id)
    {
        return $this->repository->find($id);

    }
}
