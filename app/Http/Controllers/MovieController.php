<?php


namespace App\Http\Controllers;


use App\Repositories\MovieRepository;
use Illuminate\Http\Request;

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

    public function index()
    {
        return $this->repository->getPaged($this->request->only($this->findOnly));

    }

    public function show($id)
    {
        return $this->repository->find($id);

    }
}
