import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Task/Component/Header';
import Footer from './Task/Component/Footer';
import Login from './Task/Pages/Login';
import Signup from './Task/Pages/Signup';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Profile from './Task/Pages/Profile';
import Posts from './Task/Pages/Posts';
import Mng_user from './Admin/Pages/Mng_user';


function App() {
  return (
    <div>
      <BrowserRouter>
        <ToastContainer></ToastContainer>
        <Routes>

          {
            //User 
          }

          <Route path="/" element={<><Header /><Signup /> <Footer /></>}></Route>
          <Route path="/login" element={<><Header /><Login /> <Footer /></>}></Route>
          <Route path="/profile" element={<><Header /><Profile /> <Footer /></>}></Route>
          <Route path="/posts" element={<><Header /><Posts /> <Footer /></>}></Route>


          {
            //Admin 
          }
          <Route path="/manage_user" element={<><Header /><Mng_user /> <Footer /></>}></Route>
          <Route path="/manage_post" element={<><Header /><Mng_user /> <Footer /></>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
