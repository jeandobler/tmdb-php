---
title: API Reference

language_tabs:
- bash

- javascript


includes:

search: true

toc_footers:
- <a href='http://github.com/mpociot/documentarian'>Documentation Powered by Documentarian</a>
---
<!-- START_INFO -->
# Info

Welcome to the generated API reference.
[Get Postman Collection](http://localhost/docs/collection.json)

<!-- END_INFO -->

#Movies

APIs for managing movies
<!-- START_4c52f24a898e0dae16a0a53f79728f08 -->
## List Movies

> Example request:

```bash
curl -X GET -G "http://localhost/api/movies" 
```

```javascript
const url = new URL("http://localhost/api/movies");

    let params = {
            "query": "illo",
            "page": "repellendus",
        };
    Object.keys(params).forEach(key => url.searchParams.append(key, params[key]));

let headers = {
    "Accept": "application/json",
    "Content-Type": "application/json",
}

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```


> Example response (200):


```json
{
    "data": [
        {
            "id": 36,
            "title": "Visual Logic (and Illogic)",
            "overview": "Demonstrates the visual logic (and illogic) of sign combining with limited movements of camera for panning and zooming.",
            "poster_path": "https:\/\/image.tmdb.org\/t\/p\/w500\/A4eSwERi8Hls38Z39MX2k0gAzVP.jpg",
            "backdrop_path": "https:\/\/image.tmdb.org\/t\/p\/w500",
            "release_date": "2019-05-07T03:04:56.000000Z",
            "genres": [
                {
                    "name": "Action",
                    "pivot": {
                        "movie_id": "36",
                        "genre_id": "28"
                    }
                },
                {
                    "name": "Adventure",
                    "pivot": {
                        "movie_id": "36",
                        "genre_id": "12"
                    }
                },
                {
                    "name": "Comedy",
                    "pivot": {
                        "movie_id": "36",
                        "genre_id": "35"
                    }
                },
                {
                    "name": "Fantasy",
                    "pivot": {
                        "movie_id": "36",
                        "genre_id": "14"
                    }
                }
            ],
            "created_at": "2019-05-07T03:04:56.000000Z",
            "updated_at": "2019-05-07T03:04:56.000000Z"
        },
        {
            "id": 37,
            "title": "Illogically Sane",
            "overview": "Four friends work on film production in the method that has never been done before. But when they all have different goals, how could the film be made? Gila Jiwa crosses diverse genres of horror, action, drama, comedy, and musical.",
            "poster_path": "https:\/\/image.tmdb.org\/t\/p\/w500\/ruCZ8c5orf9x57Kiy1SYSa3WZwU.jpg",
            "backdrop_path": "https:\/\/image.tmdb.org\/t\/p\/w500",
            "release_date": "2019-05-07T03:04:56.000000Z",
            "genres": [
                {
                    "name": "Romance",
                    "pivot": {
                        "movie_id": "37",
                        "genre_id": "10749"
                    }
                },
                {
                    "name": "Comedy",
                    "pivot": {
                        "movie_id": "37",
                        "genre_id": "35"
                    }
                },
                {
                    "name": "Music",
                    "pivot": {
                        "movie_id": "37",
                        "genre_id": "10402"
                    }
                },
                {
                    "name": "Action",
                    "pivot": {
                        "movie_id": "37",
                        "genre_id": "28"
                    }
                },
                {
                    "name": "Drama",
                    "pivot": {
                        "movie_id": "37",
                        "genre_id": "18"
                    }
                }
            ],
            "created_at": "2019-05-07T03:04:56.000000Z",
            "updated_at": "2019-05-07T03:04:56.000000Z"
        }
    ],
    "meta": {
        "pagination": {
            "total": 2,
            "count": 2,
            "per_page": 15,
            "current_page": 1,
            "total_pages": 1,
            "links": []
        }
    }
}
```

### HTTP Request
`GET api/movies`

#### Query Parameters

Parameter | Status | Description
--------- | ------- | ------- | -----------
    query |  optional  | string, search movies by name.
    page |  optional  | int, used to paginate.

<!-- END_4c52f24a898e0dae16a0a53f79728f08 -->

<!-- START_56f1fc486df90b720ef3bc3af3cfe700 -->
## Show Movie

> Example request:

```bash
curl -X GET -G "http://localhost/api/movies/1" 
```

```javascript
const url = new URL("http://localhost/api/movies/1");

let headers = {
    "Accept": "application/json",
    "Content-Type": "application/json",
}

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```


> Example response (200):


```json
{
    "data": {
        "id": 1,
        "title": "Avengers: Endgame",
        "overview": "After the devastating events of Avengers: Infinity War, the universe is in ruins due to the efforts of the Mad Titan, Thanos. With the help of remaining allies, the Avengers must assemble once more in order to undo Thanos' actions and restore order to the universe once and for all, no matter what consequences may be in store.",
        "poster_path": "https:\/\/image.tmdb.org\/t\/p\/w500\/or06FN3Dka5tukK1e9sl16pB3iy.jpg",
        "backdrop_path": "https:\/\/image.tmdb.org\/t\/p\/w500\/7RyHsO4yDXtBv1zUU3mTpHeQ0d5.jpg",
        "release_date": "2019-05-05T06:19:51.000000Z",
        "genres": [
            {
                "name": "Drama",
                "pivot": {
                    "movie_id": "1",
                    "genre_id": "18"
                }
            },
            {
                "name": "Music",
                "pivot": {
                    "movie_id": "1",
                    "genre_id": "10402"
                }
            },
            {
                "name": "Adventure",
                "pivot": {
                    "movie_id": "1",
                    "genre_id": "12"
                }
            },
            {
                "name": "Science Fiction",
                "pivot": {
                    "movie_id": "1",
                    "genre_id": "878"
                }
            },
            {
                "name": "Action",
                "pivot": {
                    "movie_id": "1",
                    "genre_id": "28"
                }
            }
        ],
        "created_at": "2019-05-05T06:19:51.000000Z",
        "updated_at": "2019-05-05T06:19:51.000000Z"
    }
}
```

### HTTP Request
`GET api/movies/{id}`


<!-- END_56f1fc486df90b720ef3bc3af3cfe700 -->


