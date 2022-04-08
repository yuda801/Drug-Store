import * as React from 'react';
import { Card } from '@mui/material';
import { CardContent } from '@mui/material';
import { CardMedia } from '@mui/material';
import { Typography } from '@mui/material';
import { CardActionArea } from '@mui/material';
import { CssBaseline } from '@mui/material';
import { Container } from '@mui/material';


const Home = (props) => {
    const companies = props.companies;
    return (
        <div id="home">

            <React.Fragment>
                <CssBaseline />
                <Container maxWidth="sm">
                    {companies.map(company => {
                        return (
                            <Card sx={{ maxWidth: 345 }} key={company.companyID}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        height="140"
                                        image="/static/images/cards/contemplative-reptile.jpg"
                                        alt="green iguana"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            Lizard
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            Lizards are a widespread group of squamate reptiles, with over 6,000
                                            species, ranging across all continents except Antarctica
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        )

                    })}

                </Container>
            </React.Fragment>

        </div>
    );
}


export default Home;