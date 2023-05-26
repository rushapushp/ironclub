import { observer } from "mobx-react-lite";
import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "..";
import { ScrollContext } from "../utils/scrollcontext";
import cart from "../assets/icons/icons8-shopping-cart-64.png";
import {
  ADMIN_ROUTE,
  CART_ROUTE,
  MAIN_ROUTE,
  SHOP_ROUTE,
  TRAINERS_ROUTE,
  REGISTRATION_ROUTE,
  LOGIN_ROUTE,
} from "../utils/consts";
import { useNavigate } from "react-router-dom";
import adm from "../assets/icons/docs.png";
import exit from "../assets/icons/logout.png";

const Header = observer(() => {
  const { user } = useContext(Context);

  const { ref } = useContext(ScrollContext);

  const history = useNavigate();

  const handleScroll = (ref) => {
    if (ref) {
      window.scrollTo({
        top: ref.offsetTop,
        left: 0,
        behavior: "smooth",
      });
    }
  };

  const logOut = () => {
    user.setUser({});
    user.setIsUser({});
    user.setIsAuth(false);
    localStorage.removeItem("token");
    window.location.reload();
  };

  const [show, setShow] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const controlNavbar = () => {
    if (window.scrollY > lastScrollY) {
      setShow(true);
    } else {
      setShow(false);
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY]);

  return (
    <div className={`active ${show && "hidden"}`}>
      <div className="w-[100%] h-[50px] bg-black text-white font-bold text-lg flex flex-row justify-between ">
        <div className="text-white flex flex-row gap-10 items-center mx-5 ">
          <h1 className="font-bold text-[24px] ">
            IRON <span className="text-[#FFE70C]">CLUB</span>
          </h1>
          <Link className="text-[16px] font-bold link" to={MAIN_ROUTE}>
            главная
          </Link>
          <Link className="text-[16px] font-bold link" to={TRAINERS_ROUTE}>
            тренеры
          </Link>
          <Link className="text-[16px] font-bold link" to={SHOP_ROUTE}>
            товары
          </Link>
          <button
            onClick={() => handleScroll(ref.current)}
            className="text-[16px] font-bold link down"
            to=""
          >
            контакты
          </button>
        </div>

        {user.isAuth ? (
          <div className="text-white flex flex-row gap-5 mx-5 items-center">
            
            <Link to={CART_ROUTE} className="flex flex-row"><p>корзина</p>
              <img src={cart} className="h-7" />
            </Link>
            {user.isRole === "ADMIN" ? (
              <div className="flex flex-row">
                <button
                  className="text-[16px] font-bold link"
                  onClick={() => history(ADMIN_ROUTE)}
                >
                  <img src={adm} height={30} width={28} />
                </button>
                <button
                  className="text-[16px] font-bold link"
                  onClick={() => logOut()}
                >
                  <img src={exit} height={30} width={28} />
                </button>
              </div>
            ) : (
              <p className="w-0 h-0 p-0 m-0"></p>
            )}
            <Link className="text-[16px] font-bold link pr-5" to={LOGIN_ROUTE}>
              вход
            </Link>
          </div>
        ) : (
          <div className="text-white flex flex-row gap-10 mx-5 items-center">
            <Link
              className="text-[16px] font-bold link"
              to={REGISTRATION_ROUTE}
            >
              регистрация
            </Link>
            <Link className="text-[16px] pr-5 font-bold link" to={LOGIN_ROUTE}>
              вход
            </Link>
          </div>
        )}
      </div>
    </div>
  );
});
export default Header;
