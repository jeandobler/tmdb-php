<?php

use Illuminate\Database\Seeder;

class GenreSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $adapter = app(\App\Adapter\TmDB\GenreAdapter::class);
        $genre = app(\App\Entities\Genre::class);

        try {
            $genres = ($adapter->getList());

            if ($genres->genres != null && count($genres->genres) > 0) {
                foreach ($genres->genres as $genre) {
                    $arr = (array)$genre;
                    $genre->firstOrCreate($arr);
                }
            }
        } catch (\Exception $e) {
            dd($e->getMessage());
        }
    }
}
