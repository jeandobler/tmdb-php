<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $adapter = app(\App\Adapter\TmDB\GenreAdapter::class);
        $genreModel = app(\App\Entities\Genre::class);

        try {
            $genres = ($adapter->getList());

            if ($genres->genres != null && count($genres->genres) > 0) {
                foreach ($genres->genres as $genre) {
                    $arr = (array)$genre;
                    $genreModel->firstOrCreate($arr);
                }
            }
        } catch (\Exception $e) {
        }
    }
}
