import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import image from '../assets/pic.jpg'
import { useSelector, useDispatch } from "react-redux"
import { Link } from 'react-router-dom';
import { deleteBlog } from '../redux/actions/blogActions';
import axios from 'axios'
import { useHistory } from 'react-router';

const useStyles = makeStyles({
  root: {
    maxWidth: 500,
    marginTop: "40px"
  },
  media: {
    height: 150,
  },
  description: {
    flex: 1,
    alignItems: "center"
  },
  top: {
    margin: 50
  }
});


export default function Cards() {
  const classes = useStyles();
  const blogs = useSelector((state => state.allBlogs.blogs))
  const dispatch = useDispatch();
  let history = useHistory()
  const handleDelete = async (id) => {
    const response = await axios
      .delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .catch((err) => {
        console.log(err, "err")
      })
    console.log(id, "res")
    if (window.confirm("Are you sure??")) {
      dispatch(deleteBlog(response))
      // dispatch(setBlogs())
    }
  }
  return (
    <div className={classes.top}>
      <Button size="large" color="primary" variant="contained" onClick={() => history.push("/createPost")}>Create New Post</Button>
      <Grid container spacing={3}>
        {blogs.map((posts, key) => (
          <Grid item xs={3} className={classes.root} key={key}>
            <Card>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={image}
                  title="Contemplative Reptile"
                />

                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {posts.title.slice(0, 15)}...
                  </Typography>
                  <Typography className={classes.description}>
                    {/* {console.log(listItems)} */}
                    {posts.body.slice(0, 50)}...
                  </Typography>
                </CardContent>

              </CardActionArea>

              <CardActions>
                {/* <Button size="small" color="primary" 
              // onClick={() => getId(posts.id)}
              >

                Read More...
              </Button> */}
                <Link to={`/posts/${posts.id}`}>Read More...</Link>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <Button size="large" color="secondary" onClick={() => handleDelete(posts.id)}>Delete</Button>
              </CardActions>

            </Card>

          </Grid>
        ))}
      </Grid>
    </div>
  );
}