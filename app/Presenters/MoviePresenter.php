<?php

namespace App\Presenters;

use App\Transformers\MovieTransformer;
use Prettus\Repository\Presenter\FractalPresenter;

/**
 * Class MoviePresenter.
 *
 * @package namespace App\Presenters;
 */
class MoviePresenter extends FractalPresenter
{
    /**
     * Transformer
     *
     * @return \League\Fractal\TransformerAbstract
     */
    public function getTransformer()
    {
        return new MovieTransformer();
    }
}
