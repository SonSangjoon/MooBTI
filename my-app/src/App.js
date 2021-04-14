import { Route, BrowserRouter  } from 'react-router-dom';
import { IntroPage } from './pages/intro_page'
import { TestPage } from './pages/test_page'
import { GenderPage } from './pages/gender_page'
import { ResultPage } from './pages/result_page'
import {createContext, useState} from "react"
import './App.css'
const GenderContext = createContext({});

export function App() {
  const [selectedGender, setSelectedGender] = useState("")

  return (
    <div>
      <GenderContext.Provider value={{selectedGender, setSelectedGender}}>
        <BrowserRouter>
            <Route exact path="/" component={IntroPage}/>
            <Route exact path="/gender"component={GenderPage}/>
            <Route exact path="/test" component={TestPage}/>
            <Route exact path="/:mbti/:gender"component={ResultPage}/>
        </BrowserRouter>
      </GenderContext.Provider>
    </div>
  );
}
export {GenderContext}

export default App;
