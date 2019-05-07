import React, {Component} from 'react';
import './index.css';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {Image} from "react-bootstrap";

// import {Form} from 'react-form';


const styles = {
    card: {
        maxWidth: 345,
    },
    media: {
        height: 140,
    },
};
class Movie extends Component {

    render() {

        let {title, overview, poster_path, backdrop_path, release_date} = this.props.json;
        return (
            <Card className={this.props.card}>
            <CardActionArea>
                <CardMedia
                    className={this.props.media}
                    image={poster_path}
                    title={title}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {title}
                    </Typography>
                    <Typography component="p">
                        {overview}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">
                    {release_date}
                </Button>
            </CardActions>
        </Card>

        );
    }
}


export default withStyles(styles)(Movie);



// function Movie(props) {
//     const {title, overview, poster_path, backdrop_path, release_date}  = props;
//     return (
//         <Card className={title}>
//             <CardActionArea>
//                 <CardMedia
//                     className={poster_path}
//                     image="/static/images/cards/contemplative-reptile.jpg"
//                     title="Contemplative Reptile"
//                 />
//                 <CardContent>
//                     <Typography gutterBottom variant="h5" component="h2">
//                         {title}
//                     </Typography>
//                     <Typography component="p">
//                         {overview}
//                     </Typography>
//                 </CardContent>
//             </CardActionArea>
//             <CardActions>
//                 <Button size="small" color="primary">
//                     {release_date}
//                 </Button>
//             </CardActions>
//         </Card>
//     );
// }
//
// Movie.propTypes = {
//     classes: PropTypes.object.isRequired,
// };
//
// export default withStyles(styles)(Movie);
