import React, { useEffect } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Cards from './Cards';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch, useSelector } from "react-redux"
import axios from "axios"
import { setBlogs } from "../redux/actions/blogActions"

const useStyles = makeStyles((theme) => ({
    root: {
        //backgroundColor: '#4CCCDF', 
        height: '100vh',
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

export default function MainContainer() {
    const classes = useStyles();
    // const blogs = useSelector((state => state.allBlogs.blogs) )
    const blogs = useSelector((state) => state);
    const dispatch = useDispatch();
    const url = `https://jsonplaceholder.typicode.com/posts`;

    const fetchData = async () => {
        const response = await axios
            .get(url)
            .catch((err) => {
                console.log(err, "err")
            })
        dispatch(setBlogs(response.data))
        // try {
        //   const response = await fetch(url);
        //   const json = await response.json();
        //   //console.log(json);
        //   setPosts(json);
        // } catch (error) {
        //   console.log("error", error);
        // }
    };

    useEffect(() => {
        fetchData();
    }, []);
    // console.log(blogs, "Blogs")

    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="lg" >
                <Typography component="div" className={classes.root}>
                    <Cards />
                </Typography>
            </Container>
        </React.Fragment>
    );
}