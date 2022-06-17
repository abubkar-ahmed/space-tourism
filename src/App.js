// import {Routes, Route} from 'react-router-dom';
import {Routes , Route} from 'react-router-dom';
import Crew from './components/pages/Crew';
import  Destenation  from './components/pages/Destenation';
import HomePage from './components/pages/HomePage';
import Technology from './components/pages/Technology';
import data from './data.json'



function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='destenation' element={<Destenation data={data.destinations}/>} /> 
        <Route path= 'crew' element={<Crew data={data.crew}/>} />
        <Route path= 'technology' element={<Technology data={data.technology}/>} />
      </Routes>
    </div>
  );
}

export default App;
