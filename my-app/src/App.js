
import { Route, BrowserRouter  } from 'react-router-dom';
import { introPage } from './pages/intro_page'
import { testPage } from './pages/test_page'
import { genderPage } from './pages/gender_page'
import { resultPage } from './pages/result_page'

export function App() {
  return (
    <div>
      <BrowserRouter>
          <Route exact path="/" component={introPage}/>
          <Route exact path="/test" component={testPage}/>
          <Route exact path="/gender"component={genderPage}/>
          <Route exact path="/:mbti/:gender"component={resultPage}/>
      </BrowserRouter>
    </div>
  );
}

export default App;
