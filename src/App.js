import "./App.css";
import { useState } from "react";
import React from "react";
import animeData from "./assets/data.json";
import AnimeItem from "./components/AnimeItem";
import { Grid, Container, CssBaseline, Typography, AppBar, Toolbar} from '@mui/material';
import { FormControl, FormLabel, RadioGroup, FormControlLabel, Radio, Checkbox } from '@mui/material';
import { Box } from '@mui/system';
import { createTheme, ThemeProvider } from '@mui/material/styles';

animeData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});

const theme = createTheme({
  palette: {
    primary: {
      main: '#3f51b5',
    },
    secondary: {
      main: '#f50057',
    },
  }
}
);

function App() {

  const [sortAZ, setSortAZ] = useState("Name");
  const [filterGenre, setFilterGenre] = useState("All");
  const [filterComp, setFilterComp] = useState("All");
  const [faveChecked, setFaveChecked] = useState(false);
  const [favouriteItems, setfavItems] = useState([]);

  const handleCompletionChange = (e) => {
    setFilterComp(e.target.value)
  }

  const handleFaveChange = (e) => {
    setFaveChecked(e.target.checked)
  }
  
  const handleGenreChange = (e) => {
    setFilterGenre(e.target.value)
  }

  const handleSortingChange = (e) => {
    setSortAZ(e.target.value)
  }

  const handleRating = () => {
    if(favouriteItems.length === 0){
      return 0
    }
    let total = 0.0;
    for(let i = 0; i < favouriteItems.length; i++) {
        total += favouriteItems[i].rating;
    }

    return total/favouriteItems.length
  }

  const sortFunc = (item1, item2) => {
    if(sortAZ === "Name") {
      return item1.name.localeCompare(item2.name)
    } else if(sortAZ === "Name1") {
      return item2.name.localeCompare(item1.name)
    } else if(sortAZ === "Rating") {
      return item2.rating - item1.rating
    } else if(sortAZ === "RatingL") {
      return item1.rating - item2.rating
    }
  }

  const filterFunc = (i) => {
    if(filterGenre === "All") {
      return true
    } else if(i.genre === filterGenre) {
      return true
    } else {
      return false
    }
  }

  const filterFunc2 = (i) => {
    if(filterComp === "All") {
      return true
    } else if(i.ongoing === filterComp) {
      return true
    } else {
      return false
    }
  }

  const filterFuncFave = (i) => {
    if(faveChecked === false) {
      return true
    } else if(favouriteItems.includes(i)) {
      return true
    } else {
      return false
    }
  }

  const filterData = animeData.filter(filterFunc)

  const filterData2 = filterData.filter(filterFunc2)

  const filterFaveData = filterData2.filter(filterFuncFave)

  const sortedData = filterFaveData.sort(sortFunc)
  

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="relative" >
        <Toolbar>
          <Typography variant="h4" color="inherit" noWrap>
            Anime List
          </Typography>
        </Toolbar>
      </AppBar>
    <br></br>
    <main>
    <div className="App">
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={9.5}>
            <Grid container spacing={2}>
              {sortedData.map((item, index) => (
                <Grid item xs={12} sm={6} md={6}>
                  <AnimeItem item={item} favouriteItems={favouriteItems} setfavItems={setfavItems}/>
                </Grid>
              ))}
            </Grid>
          </Grid>
          <Grid item xs>
            <Box sx={{width: 210, height: 200}}>
              <Typography variant="h5" component="h2">Menu</Typography>
              <br></br>
              <Typography variant="body1" component="h1">Favourites Avg Rating: {handleRating()}</Typography>
              <FormControl component="fieldset">
                <RadioGroup aria-label="gender2" name="gender3">
                  <FormControlLabel value="Faves" control={<Checkbox checked ={faveChecked} onChange={handleFaveChange}/>} label="Show only Favourites" />
                </RadioGroup>
              </FormControl>
              <br></br> <br></br>
              <FormControl component="fieldset">
                <FormLabel component="legend">Sort by</FormLabel>
                  <RadioGroup  defaultValue="Name" aria-label="gender" name="gender1" onChange={handleSortingChange}>
                    <FormControlLabel value="Name" control={<Radio />} label="Alphabetic" />
                    <FormControlLabel value="Name1" control={<Radio />} label="Reverse Alphabetic" />
                    <FormControlLabel value="Rating" control={<Radio />} label="Highest Rating" />
                    <FormControlLabel value="RatingL" control={<Radio />} label="Lowest Rating" />
                  </RadioGroup>
              </FormControl>
              <br></br> <br></br>
              <FormControl component="fieldset">
                <FormLabel component="legend" >Filter by Genre</FormLabel>
                  <RadioGroup  defaultValue="All" aria-label="gender2" name="gender3" onChange={handleGenreChange}>
                    <FormControlLabel value="All" control={<Radio />} label="All" />
                    <FormControlLabel value="Action/Adventure" control={<Radio />} label="Action/Adventure" />
                    <FormControlLabel value="Drama" control={<Radio />} label="Drama" />
                    <FormControlLabel value="Romance" control={<Radio />} label="Romance" />
                    <FormControlLabel value="Sports" control={<Radio />} label="Sports" />
                  </RadioGroup>
              </FormControl>
              <br></br> <br></br>
              <FormControl component="fieldset">
                <FormLabel component="legend" >Filter by Ongoing</FormLabel>
                  <RadioGroup  defaultValue="All" aria-label="gender2" name="gender3" onChange={handleCompletionChange}>
                    <FormControlLabel value="All" control={<Radio />} label="All" />
                    <FormControlLabel value="No" control={<Radio />} label="Finished" />
                    <FormControlLabel value="Yes" control={<Radio />} label="Ongoing" />
                  </RadioGroup>
              </FormControl>
              <br></br> <br></br>          
            </Box>
          </Grid>
        </Grid>
        <br></br>
      </Container>
    </div>
    </main>
    </ThemeProvider>
  );
}

export default App;