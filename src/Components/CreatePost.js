import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router';
import { useDispatch } from "react-redux"
import { addBlog } from '../redux/actions/blogActions';
import axios from 'axios';
// import axios from 'axios'

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: 100,
        marginLeft: 200,
        '& > *': {
            margin: theme.spacing(5),
            width: '100ch',
        },
    }
}));

export default function CreatePost() {
    const classes = useStyles();
    const history = useHistory()
    const dispatch = useDispatch()
    const [state, setState] = useState({
        userID: "",
        title: "",
        body: ""
    })
    const [error, setError] = useState("")

    const { userID, title, body } = state;
    const handleInputChange = (e) => {
        let { name, value } = e.target;
        setState({ ...state, [name]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!userID || !title || !body) {
            setError("please fill all the infos")
        }
        else {
            console.log(state)
            axios
                .post(`https://jsonplaceholder.typicode.com/posts`, state)
                .catch((error) => {
                    console.log(error)
                })
            dispatch(addBlog())
            history.push("/")
        }



    }

    return (
        <form className={classes.root} noValidate autoComplete="off" onSubmit={handleSubmit}>
            <h1>Create your Post</h1>
            {error && <h3 style={{ color: "red" }}>{error}</h3>}
            <TextField onChange={handleInputChange} name="userID" id="outlined-basic" label="UserID" variant="outlined" value={userID} />
            <br />
            <TextField onChange={handleInputChange} name="title" id="outlined-basic" label="Post Title" variant="outlined" value={title} />
            <br />
            <TextField onChange={handleInputChange} name="body" id="outlined-basic" label="Post Body" variant="outlined" value={body} />
            <br />
            <Button onChange={handleInputChange} size="large" color="primary" variant="contained" type="submit">Submit</Button>
            <Button size="large" color="secondary" variant="contained" onClick={() => history.push("/")}>Back to Home</Button>
        </form>
    );
}
