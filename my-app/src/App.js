
import { Route, BrowserRouter  } from 'react-router-dom';
import { IntroPage } from './pages/intro_page'
import { TestPage } from './pages/test_page'
import { GenderPage } from './pages/gender_page'
import { ResultPage } from './pages/result_page'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
    root: {
      background: 'black',
      height: '100vh'
    },
  });

export function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <BrowserRouter>
          <Route exact path="/" component={IntroPage}/>
          <Route exact path="/gender"component={GenderPage}/>
          <Route exact path="/test" component={TestPage}/>
          <Route exact path="/:mbti/:gender"component={ResultPage}/>
      </BrowserRouter>
    </div>
  );
}

export default App;
