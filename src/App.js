import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import Container from './Components/Container';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import IndividualPost from './Components/IndividualPost';
import CreatePost from './Components/CreatePost';

const useStyles = makeStyles({
  root: {
    //backgroundColor: "#4CCCDF"
  }
});

function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Router>
        <Switch>
        <Route path="/" exact component={Container} />
        <Route path="/createPost" exact component={CreatePost} />
        <Route path="/posts/:postId" exact component={IndividualPost} />
        <Route>404 Not Found</Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
