import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { selectedBlog, removeSelectedBlog } from '../redux/actions/blogActions'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import image from '../assets/pic.jpg'
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router';


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: "center",
        marginTop: "50px"
    },
    details: {
        display: 'flex',
        flexDirection: 'column',
    },
    content: {
        flex: '1 0 auto',
    },
    cover: {
        width: 1000,
        height: 800
    },
    controls: {
        display: 'flex',
        alignItems: 'center',
        paddingLeft: theme.spacing(1),
        paddingBottom: theme.spacing(1),
    },
    playIcon: {
        height: 38,
        width: 38,
    },
}));

const IndividualPost = () => {
    const blog = useSelector(state => state.blog)
    const history = useHistory()
    const { postId } = useParams();
    const dispatch = useDispatch()
    console.log(blog)
    const fetchBlogDetails = async () => {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`)
            .catch(err => {
                console.log(err)
            })

        dispatch(selectedBlog(response.data))
    }

    useEffect(() => {
        if (postId && postId !== "") fetchBlogDetails();
        return () => {
            dispatch(removeSelectedBlog());
          };
    }, [postId])
    const classes = useStyles();
    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="lg" >
                <Card className={classes.root}>
                    <CardMedia
                        className={classes.cover}
                        image={image}
                        title="Live from space album cover"
                    />
                    <div className={classes.details}>
                        <CardContent className={classes.content}>
                            <Typography component="h2" variant="h3">
                                {blog.title}
                            </Typography>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <hr />
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <Typography variant="subtitle1" color="textSecondary">
                                {blog.body}
                            </Typography>
                        </CardContent>
                        <Button size="large" color="secondary" variant="contained" onClick={() => history.push("/")}>Back to Home</Button>
                    </div>
                </Card>

            </Container>
        </React.Fragment>
    )
}

export default IndividualPost