import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Start from './pages/StartPage';
import UserLogin from './pages/userLogin';
import UserSignUp from './pages/UserSignUp';
import CaptainLogin from './pages/CaptainLogin';
import CaptainSignUp from './pages/CaptainSignUp';
import Home from './Home';
import UserProtectedWrapper from './pages/UserProtectedWrapper';
import UserLogout from './pages/UserLogout';
import CaptainHome from './pages/CaptainHome';
import CaptainContext from './context/CaptainContext';
import CaptainProtectWrapper from './pages/CaptainProtectedWrapper';
import CaptainLogout from './pages/CaptainLogout';

const App = () => {
  return (
    <CaptainContext>
      <div>
        <Routes>
          <Route path="/" element={<Start />} />
          <Route path="/login" element={<UserLogin />} />
          <Route path="/signup" element={<UserSignUp />} />
          <Route path="/captain-login" element={<CaptainLogin />} />
          <Route path="/captain-signup" element={<CaptainSignUp />} />
          <Route
            path="/home"
            element={
              <UserProtectedWrapper>
                <Home />
              </UserProtectedWrapper>
            }
          />
          <Route path="/user/logout" element={
            <UserProtectedWrapper>
              <UserLogout />
            </UserProtectedWrapper>
          } />
          <Route path="/captain-home" element={
            <CaptainProtectWrapper>
              <CaptainHome />
            </CaptainProtectWrapper>
          } />
          <Route path="/captains/logout" element={
            <UserProtectedWrapper>
              <CaptainLogout />
            </UserProtectedWrapper>
          } />
        </Routes>
      </div>
    </CaptainContext>
  );
};

export default App;
