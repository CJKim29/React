import { Box, Grid } from '@mui/material';
import React from 'react';

function TestGrid() {

    const grid_border = { border: '1px solid red' };

    return (
        <div>
            <Grid container mt={5}>
                <Grid sx={grid_border} item xs={3}>
                    <Box bgcolor='primary.light' p={2}>Item1</Box>
                </Grid>
                <Grid sx={grid_border} item xs={9}>
                    <Box bgcolor='primary.light' p={2}>Item2</Box>
                </Grid>
                <Grid sx={grid_border} item xs={6}>
                    <Box bgcolor='primary.light' p={2}>Item3</Box>
                </Grid>
                <Grid sx={grid_border} item xs={3}>
                    <Box bgcolor='primary.light' p={2}>Item4</Box>
                </Grid>
                <Grid sx={grid_border} item xs={3}>
                    <Box bgcolor='primary.light' p={2}>Item5</Box>
                </Grid>
                <Grid sx={grid_border} item xs={12}>
                    <Box bgcolor='primary.light' p={2}>Item6</Box>
                </Grid>
            </Grid>
        </div>
    );
}

export default TestGrid;