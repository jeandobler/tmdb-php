import React, {Component} from 'react';
import './index.css';
import {withStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import {Redirect} from "react-router-dom";


const styles = {
    card: {
        maxWidth: 345,
    },
    media: {
        height: 140,
        width: "100%",
    },
};

class Movie extends Component {




    render() {

        function goToDetails(prop) {
            return
        }



        let {title, overview, small_overview,   backdrop_path, release_date_label,main_genre} = this.props.json;
        return (
            <Card className={this.props.card}>
                <CardActionArea>
                    <CardMedia
                        style={{height: 300, width: "100%",}}
                        image={backdrop_path}
                        title={title}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {title}
                        </Typography>
                        <Typography component="p">
                            {small_overview}
                        </Typography>
                        <Typography component="b" style={{textAlign: "right", marginTop: 8}}>
                            {main_genre}
                        </Typography>
                        <Typography component="b" style={{textAlign: "right", marginTop: 8}}>
                            {release_date_label}
                        </Typography>

                    </CardContent>
                </CardActionArea>

            </Card>

        );
    }
}


export default withStyles(styles)(Movie);
