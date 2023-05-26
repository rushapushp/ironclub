import React, { useContext, useState, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import AppRouter from './components/AppRouter';
import Header from './components/Header';
import { observer } from 'mobx-react-lite';
import { Context } from './index';
import { check } from './http/userAPI';
import SquareLoader from "react-spinners/SquareLoader";

const App = observer(() => {
  const {user} = useContext(Context)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    check().then(data => {
        user.setUser(data.role)
        user.setIsUser(data.id)
        user.setIsAuth(true)
    }).finally(() => setLoading(false))
}, [])

if (loading) {
  return (
    <div className='flex flex-row items-center justify-center ml-10 h-[900px]'>
      <div className='flex flex-col'>
  <SquareLoader color="#FFE70C" />
  <SquareLoader color="black" />
  </div>
  <div className='flex flex-col'>
  <SquareLoader color="black" />
  <SquareLoader color="#FFE70C" />
  </div>
  </div>
  )
  
}

  return (
    <BrowserRouter>
    <Header />
      <AppRouter />
    </BrowserRouter>
  );
});

export default App;
