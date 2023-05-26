import React, { useState, useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {login, registration} from "../http/userAPI";
import { REGISTRATION_ROUTE, LOGIN_ROUTE, MAIN_ROUTE } from "../utils/consts";
import {Context} from "../index";
import {observer} from "mobx-react-lite";

const Auth = observer(() => {
  const {user} = useContext(Context)

  const history = useNavigate()

  const location = useLocation()

  const isLogin = location.pathname === LOGIN_ROUTE

  console.log(location)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const click = async () => {
    try {
      let data;
      if (isLogin){
        data = await login(email, password);
        console.log(data)
      }else{
        data = await registration(email, password);
      }
      user.setUser(data.role) 
      user.setIsUser(data.id) 
      user.setIsAuth(true)
      history(MAIN_ROUTE)
    } catch (e) {
      alert(e.response.data.message)

    }
  }

  const handleClick = (e) => {
    e.preventDefault()
    click()
  }

  return (
    <div className=" backgroundAuth w-[100%] h-[974px]  flex flex-col justify-center items-center bg-[#E4E4E4]">
      <div className="glass w-[500px] h-max">
        <h1 className="flex px-3 justify-center text-[70px] text-[#FFE70C]">
          {isLogin ? "вход" : "регистрация"}
        </h1>
        <div className="flex pt-2 pb-10 justify-center items-center">
          <form className="flex flex-col justify-center items-center gap-7 text-[#E4E4E4] text-[30px]">
            <label className="flex flex-col justify-center items-center gap-3 text-[#E4E4E4] text-[30px]">
              логин
              <input type="text" name="login" value={email} onChange={e => setEmail(e.target.value)}/>
              пароль
              <input type="password" name="password" value={password} onChange={e => setPassword(e.target.value)}/>
            </label>
            { isLogin ?
             <button className=" text-[20px] text-black bg-[#ffe70c] p-2 "  onClick={(e) => handleClick(e)}>
              войти
            </button>
            :
            <button className=" text-[20px] text-black bg-[#ffe70c] p-2"   onClick={(e) => handleClick(e)}>
              зарегистрироваться
            </button>
            }
            или
            { isLogin ?
            <Link className="text-[#ffe70c] text-[26px] hover:text-white" to = {REGISTRATION_ROUTE}>зарегистрироваться</Link>
            :
            <Link className="text-[#ffe70c] text-[26px] hover:text-white" to = {LOGIN_ROUTE}>войти</Link>
            }
          </form>
        
        </div>
      </div>
      
    </div>
  );
});

export default Auth;