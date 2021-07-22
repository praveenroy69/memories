import React, { useState,useEffect } from 'react';
import {Container,AppBar,Typography,Grow,Grid} from '@material-ui/core';
import logo from './images/logo.png';
import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import useStyles from './styles';
import {useDispatch} from 'react-redux';
import {getPosts} from './actions/posts.js'

const App = () =>{
    const [currentId,  setCurrentId] = useState(0);
    const classes = useStyles();
    const dispatch = useDispatch();
   
    useEffect( () => {
        dispatch(getPosts());
    },[currentId,dispatch]);

    return (
        <Container maxWidth='lg'>
            <AppBar className={classes.appBar} position="static" color="inherit">
               <img className={classes.image} src={logo} alt="need" height="40"></img>
                <Typography className={classes.heading} fontSize="18" variant="h6" align="center">
                 Memories - Find More
                </Typography>   
            </AppBar>
            <Grow in>
                <Container>
                    <Grid container className={classes.mainContainer} justifyContent="space-between" alignItems="stretch" spacing={3}>
                        <Grid item xs={12} sm={7}>
                            <Posts setCurrentId={setCurrentId}/>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Form currentId={currentId} setCurrentId={setCurrentId}/>
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container>
    );
}

export  default App;