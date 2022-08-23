import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Header from './components/Header';
import Counter from './features/counter/counter';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
   return (
     <>
       {/* <Router>
         <div className='container'>
           <Header />
           <Routes>
             <Route path='/' element={<Dashboard />} />
             <Route path='/register' element={<Register />} />
             <Route path='/login' element={<Login />} />
           </Routes>
         </div>
       </Router> */}
       <Counter />
     </>
   );
}

export default App;
