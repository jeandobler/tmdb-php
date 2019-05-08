import React, {Component} from 'react';
import './index.css';
import {withStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Container from "react-bootstrap/Container";


const styles = theme => ({
    card: {
        display: 'flex',
    },
    details: {
        display: 'flex',
        flexDirection: 'column',
    },
    content: {
        flex: '1 0 auto',
    },
    cover: {
        width: 151,
    },
});

class MovieDetails extends Component {

    render() {

        let {title, overview, classes, poster_path, release_date_label, main_genre} = this.props.json;

        return (
            <Container>
                <Card style={{display: 'flex',}}>
                    <CardMedia
                        style={{
                            flexDirection: 'column',
                            width: '100%',
                            height:  500  }}
                        image={poster_path}
                        title={title}
                    />
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                    }}>
                        <CardContent style={{flex: '1 0 auto',}}>
                            <Typography component="b" style={{textAlign: "right", marginTop: 8}}>
                                {main_genre}
                            </Typography>
                            <Typography component="b" style={{textAlign: "right", marginTop: 8}}>
                                {release_date_label}
                            </Typography>
                            <Typography component="h5" variant="h5">
                                {title}
                            </Typography>

                            <Typography variant="subtitle1" color="textSecondary">
                                {overview}
                            </Typography>

                        </CardContent>

                    </div>

                </Card>
            </Container>
        );

    }
}

export default withStyles(styles)(MovieDetails);
