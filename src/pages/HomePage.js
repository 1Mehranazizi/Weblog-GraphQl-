import { Grid } from '@mui/material';
import { Container } from '@mui/system';
import React from 'react';
import Authors from '../components/home/Authors';
import Blogs from '../components/home/Blogs';

const HomePage = () => {
    return (
        <Container maxWidth="lg">
            <Grid container spacing={3} mt={8} padding={3}>
                <Grid item xs={12} md={3}>
                    <Authors />
                </Grid>
                <Grid item xs={12} md={9}>
                    <Blogs />
                </Grid>
            </Grid>
        </Container>
    );
};

export default HomePage;