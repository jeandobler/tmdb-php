# TheMovieDB React and Laravel

This project was build using Laravel with repository patterns and react as FrontEnd. Here we consume the TheMovieDb APi and store data Locally


##Installing

`$ git clone https://github.com/jeandobler/tmdb-php.git`

`$ yarn install`

`$ composer install`

copy `.env.example` into `.env` and set `TMDB_KEY=youtkey` and `TMDB_URL=https://api.themoviedb.org/3` 
 
run `$ php artisan key:generate`

create if not have a `database.sqlite` inside database folder and run `$ php artisan migrate --seed` to create first structures

##Packages used

###Backend
- Laravel: this is one of the best frameworks for php, it gives a easy way to organize your code and a lot of tools to made a clean and simple architecture
- Eloquent: as default laravel ORM
- Guzzlehttp: provides a easy way to consume external Apis
- laravel-apidoc-generator: a good doc generator
- prettus/l5-repository: a package with default repository patterns     
- league/fractal: a strong league package who fives 

###Frontend
- webpack: for building process
- font-awesome: for some icons
- material-ui: for some nice looking stuff
- axios: for api consume
- react-redus, saga: help to build a clean code structure


#Api Documentation
http://arsene.herokuapp.com/docs

**Cors is not enabled