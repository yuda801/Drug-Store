import { useState } from "react";
import * as React from 'react';
import { Box } from '@mui/material';
import { TextField } from '@mui/material';
import { Button } from "@mui/material";
import { Stack } from "@mui/material";
import { Typography } from "@mui/material";

const AddMedicin = () => {
    const [fisrtName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [isActive, setActive] = useState(true);

    return (
        <Stack direction="row" spacing={2}>
            <div id="log-in-container">

                <Typography variant="h3" component="h3"
                >AddMedicin</Typography>
                <br />
                <Box
                    component="form"
                    sx={{
                        '& > :not(style)': { m: 1, width: '25ch' },
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <TextField label="first name"
                        color="secondary"
                        name="first-name"
                        id="first-name"
                        onChange={(e) => setFirstName(e.target.value)}
                    />
                </Box>
                <Box
                    component="form"
                    sx={{
                        '& > :not(style)': { m: 1, width: '25ch' },
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <TextField label="last name"
                        color="secondary"
                        name="last-name"
                        id="last-name"
                        onChange={(e) => setLastName(e.target.value)}
                    />
                </Box>

                <Button type="submit"
                    onClick={() => { setActive(!isActive) }}
                    id="submit-btn"
                >Add!</Button>

            </div>
        </Stack>

    );
}

export default AddMedicin;