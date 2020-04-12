import React from 'react'
import AppBar from "../components/AppBar";
import Menu from "../components/Menu";
import {Grid, Box, Paper} from "@material-ui/core";

export default (props) => {


    return (
    <div>
        <Grid container spacing={0}>
            <Grid item xs={12}>
                <AppBar/>
            </Grid>
            <Grid container spacing={1}>
                <Grid item xs={3}>
                    <Paper>
                        <Menu/>
                    </Paper>
                </Grid>
                <Grid item xs={9}>
                    <Box m={2}>
                        <Paper>
                            <Box p={4}>
                                {props.children}
                            </Box>
                        </Paper>
                    </Box>
                </Grid>
            </Grid>
        </Grid>
    </div>
)
}
