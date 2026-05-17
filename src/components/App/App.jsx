import { Routes, Route } from 'react-router-dom';
import Layout from '@/routes/Component/Layout';
import Home from '@/routes/Pages/Home';
import PhonebooDetails from '@/routes/Pages/PhonebooDetails';
import Description from '@/routes/Component/Description';
import NotFoundPage from '@/routes/Pages/NotFoundPage';
import LoginPage from '@/routes/Pages/LoginPage';
import RegisterPage from '@/routes/Pages/RegisterPage';
import style from './App.module.css';

export default function App() {
  return (
    <div className={style.app}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<RegisterPage />} />

          <Route path="phonebook" element={<PhonebooDetails />}>
            <Route path="description" element={<Description />} />
          </Route>

          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </div>
  );
}
