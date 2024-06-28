import React from 'react';
import { Container, Box, Grid, CssBaseline } from '@mui/material';
import TypeaheadSearch from './components/TypeaheadSearch';
import ExpandableList from './components/ExpandableList';
import MobileList from './components/MobileList';
import CarouselComponent from './components/Carousel';
import MarqueeComponent from './components/Marquee';
import Footer from "./components/Footer.js";

function App() {
  return (
    <Box sx={{ backgroundColor: '#100e17', minHeight: '100vh', overflowX: 'hidden' }}>
      <CssBaseline />
      <Box sx={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000, color:'white', backgroundColor: 'rgb(2, 20, 46)', boxShadow: 1, p: 2, backgroundImage: 'url("")', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
        <Container >
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={12} sm={6}>
              <TypeaheadSearch />
            </Grid>
            <Grid item xs={12} sm={6}>
              <ExpandableList />
            </Grid>
          </Grid>
        </Container>
      </Box>
      
      <Container sx={{ mt: { xs: 16, sm: 10, boxShadow: '0 10px 150px rgb(2, 20, 106)' }}}>
      <Box sx={{ paddingTop: 6, border: '2px solid #fff'}}>
          <CarouselComponent />
        </Box>
      </Container>
      
      <Box sx={{ paddingTop: 6, boxShadow: '0 10px 15px aqua'}}>
        <h1 style={{ width: '100%', backgroundColor: '#100e17', color: '#fff', paddingLeft: 50 }}>Top Brands</h1>
        <MarqueeComponent />
      </Box>

      <Box sx={{ paddingTop: 6,}}>
        <h1 style={{ width: '100%', backgroundColor: '#100e17', color: '#fff', paddingLeft: 50 }}>Categories</h1>
      </Box>

      <Container sx={{ mt: { xs: 6, sm: 1, } }}>

        <Box sx={{ paddingTop: 1}}>
          <MobileList />
        </Box>
      </Container>
      
      <Box sx={{ paddingTop: 6 }}>
        <Footer />
      </Box>
    </Box>
  );
}

export default App;
