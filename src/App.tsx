import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home/Home';
import { Login } from './pages/Login/Login';
import { Register } from './pages/Register/Register';

export const App = () => {
   return (
      <>
         <nav className="m-[100px] mt-[64px] mb-[174px] font-bold text-lg">
            Design World
         </nav>
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
         </Routes>
      </>
   );
};
