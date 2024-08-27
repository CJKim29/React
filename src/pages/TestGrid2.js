import { Box, Grid, Paper } from '@mui/material';
import React, { Fragment } from 'react';

function TestGrid2() {

    const grid_border = { border: '1px solid red' };

    return (
        <Fragment>
            <Grid container mt={5}>
                <Grid style={grid_border} item xs={12} sm>
                    <Box bgcolor='primary.light' p={2}>Item1</Box>
                </Grid>
                <Grid style={grid_border} item xs={12} sm>
                    <Box bgcolor='primary.light' p={2}>Item2</Box>
                </Grid>
                <Grid style={grid_border} item xs={12} sm>
                    <Box bgcolor='primary.light' p={2}>Item3</Box>
                </Grid>
                <Grid style={grid_border} item xs={12} sm>
                    <Box bgcolor='primary.light' p={2}>Item4</Box>
                </Grid>
                <Grid style={grid_border} item xs={12} sm>
                    <Box bgcolor='primary.light' p={2}>Item5</Box>
                </Grid>
                <Grid style={grid_border} item xs={12} sm>
                    <Box bgcolor='primary.light' p={2}>Item6</Box>
                </Grid>
            </Grid>
            <br /><br />
            <Paper sx={{ padding: '30px', backgroundColor: '#00ff20' }}>
                <Grid container mt={5} rowSpacing={1} columnSpacing={2}>
                    <Grid item xs={6}>
                        <Box bgcolor='primary.light' p={2}>Item1</Box>
                    </Grid>
                    <Grid item xs={6}>
                        <Box bgcolor='primary.light' p={2}>Item2</Box>
                    </Grid>
                    <Grid item xs={6}>
                        <Box bgcolor='primary.light' p={2}>Item3</Box>
                    </Grid>
                    <Grid item xs={6}>
                        <Box bgcolor='primary.light' p={2}>Item4</Box>
                    </Grid>
                    <Grid item xs={6}>
                        <Box bgcolor='primary.light' p={2}>Item5</Box>
                    </Grid>
                    <Grid item xs={6}>
                        <Box bgcolor='primary.light' p={2}>Item6</Box>
                    </Grid>
                </Grid>
            </Paper>
        </Fragment>
    );
}

export default TestGrid2;