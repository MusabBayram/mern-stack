import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Header from './components/Header';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Register from './pages/Register';
import { useSelector } from "react-redux";

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

  return (
    <div className='App'>
      {giris ? (
        <>
          {hesapla}
          <button>+</button>
          <button>-</button>
        </>
      ) : (
        <>
          <h3>Lütfen Giriş Yapınız</h3>
          <button>Giriş</button>
        </>
      )}
    </div>
  )
}

export default App;
