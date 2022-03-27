import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import ListTaskComponent from './components/ListTaskComponent';
import ListRewardComponent from './components/ListRewardComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';

function App() {
  return (
    <div>
      <Router>
        <div className='container'>
          <HeaderComponent />
            <div className="container ">
              <Routes>
                <Route path='/' element={<ListTaskComponent/>}/>
                <Route path='/tasks' element={<ListTaskComponent/>}/>
                <Route path='/rewards' element={<ListRewardComponent/>}/>
              </Routes>
            </div>
          <FooterComponent />
        </div>
      </Router>
    </div>
    
  );
}

export default App;
