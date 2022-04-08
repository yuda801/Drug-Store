import * as React from 'react';
import { Card } from '@mui/material';
import { CardContent } from '@mui/material';
// import { CardMedia } from '@mui/material';
import { Typography } from '@mui/material';
import { CardActionArea } from '@mui/material';
import { CssBaseline } from '@mui/material';
import { Container } from '@mui/material';
import { Paper } from '@mui/material';

const Home = (props) => {
    const companies = props.companies;
    return (
        <div id="home" style={{ margin: "30px auto" }}>

            <React.Fragment>
                <CssBaseline />
                <Container maxWidth="sm">
                    {companies.map(company => {
                        return (
                            <Card sx={{ maxWidth: 345 }} key={company.companyID}>
                                <CardActionArea>
                                    <Paper variant="outlined">
                                    </Paper>
                                    {/* <img
                                        src="../pic/640px-Pfizer_(2021).svg.png"
                                        // src={company.companyLogo}
                                        // srcSet={company.companyLogo.svg}
                                        // alt="error loading piture"
                                        // style={{ width="100px", height="100px" }}
                                        alt="error"
                                    /> */}
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            {company.companyName}
                                        </Typography>
                                        {/* <Typography variant="body2" color="text.secondary">
                                            Lizards are a widespread group of squamate reptiles, with over 6,000
                                            species, ranging across all continents except Antarctica
                                        </Typography> */}
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