
import { Route, BrowserRouter  } from 'react-router-dom';
import { IntroPage } from './pages/intro_page'
import { TestPage } from './pages/test_page'
import { GenderPage } from './pages/gender_page'
import { ResultPage } from './pages/result_page'

export function App() {
  return (
    <div>
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
