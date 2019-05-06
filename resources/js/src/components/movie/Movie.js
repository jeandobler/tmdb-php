import React, {Component} from 'react';
import './index.css';
import {Image} from "react-bootstrap";

// import {Form} from 'react-form';

class Movie extends Component {

    render() {

        let {title, overview, poster_path, backdrop_path, release_date} = this.props;
        return (
            <div className={'row'}>

                <Image src={backdrop_path}/>

                <div>
                    {title} {release_date}
                </div>

                <div>
                    {overview}
                </div>

            </div>

        );
    }
}


export default Movie;
