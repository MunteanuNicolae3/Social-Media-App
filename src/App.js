import './App.css';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AuthPage from './pages/AuthPage';
import Layout from './components/Layout';
import Profile from './components/StartingPage/profile/Profile';
import Friends from './pages/Friends';

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path='/' element={<HomePage />}></Route>
          <Route path='/auth' element={<AuthPage></AuthPage>}></Route>
          <Route path='*' element={<Friends></Friends>}></Route>
          <Route path='/me' element={<Profile></Profile>}></Route>
        </Routes>
      </Layout>
    </>
  );
}

export default App;
