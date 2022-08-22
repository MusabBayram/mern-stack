import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Header from './components/Header';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Register from './pages/Register';
import { useSelector, useDispatch } from "react-redux";
import { girisYap, topla, cikar } from './actions';

function App() {
  // return (
  //   <>
  //     <Router>
  //       <div className='container'>
  //         <Header />
  //         <Routes>
  //           <Route path='/' element={<Dashboard />} />
  //           <Route path='/register' element={<Register />} />
  //           <Route path='/login' element={<Login />} />
  //         </Routes>
  //       </div>
  //     </Router>
  //   </>
  // );

  const giris = useSelector(state => state.giris);
  const hesapla = useSelector(state => state.hesapla);

  const dispatch = useDispatch();

  return (
    <div className='App'>
      {giris ? (
        <>
          {hesapla}
          <button onClick={()=>dispatch(topla(10))}>+</button>
          <button onClick={()=>dispatch(cikar())}>-</button>
        </>
      ) : (
        <>
          <h3>Lütfen Giriş Yapınız</h3>
          <button onClick={()=>dispatch(girisYap())}>Giriş</button>
        </>
      )}
    </div>
  )
}

export default App;
