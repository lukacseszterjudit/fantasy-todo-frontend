import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import ListTaskComponent from './components/ListTaskComponent';
import ListRewardComponent from './components/ListRewardComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import CreateTaskComponent from './components/CreateTaskComponent';
import CreateRewardComponent from './components/CreateRewardComponent';

function App() {
  return (
    <div>
        <div className='container'>
            <BrowserRouter>
                <HeaderComponent />
                <Switch>
                  <Route exact path="/"><ListTaskComponent /></Route>
                  <Route path="/tasks"><ListTaskComponent /></Route>
                  <Route path="/rewards"><ListRewardComponent /></Route>
                  <Route path="/add-task/:id"><CreateTaskComponent /></Route>
                  <Route path="/add-reward/:id"><CreateRewardComponent /></Route>
                </Switch>
                <FooterComponent />
            </BrowserRouter>
        </div>
    </div>
    
  );
}

export default App;
