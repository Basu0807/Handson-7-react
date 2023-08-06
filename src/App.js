
import LinkCompo from './NewComponents/LinkCompo'
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import RouteCompo from './NewComponents/RouteCompo';


function App() {
  return (
    <>
     <BrowserRouter>
   <LinkCompo/>
   <RouteCompo/>
   </BrowserRouter>
    </>
  )
}

export default App;
