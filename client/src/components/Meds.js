import * as React from 'react';
import { Card } from '@mui/material';
import { CardContent } from '@mui/material';
import { Typography } from '@mui/material';
import { CardActionArea } from '@mui/material';
import { CssBaseline } from '@mui/material';
import { Container } from '@mui/material';
import { Paper } from '@mui/material';

const Meds = (props) => {
    const medicines = props.medicines;
    return (
        <div id="home" style={{ margin: "30px auto" }}>

            <React.Fragment>
                <CssBaseline />
                <Container maxWidth="sm">
                    {medicines.map(medicin => {
                        return (
                            <Card sx={{ maxWidth: 345 }} key={medicin.medicineID}>
                                <CardActionArea>
                                    <Paper variant="outlined">
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="div">
                                                {medicin.medicineName}
                                            </Typography>
                                        </CardContent>
                                    </Paper>
                                </CardActionArea>
                            </Card>
                        )

                    })}

                </Container>
            </React.Fragment>

        </div>
    );
}


export default Meds;