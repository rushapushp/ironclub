import React, { useContext } from "react";
import alexey from "../assets/img/alexey.png";
import kirill from "../assets/img/kirill.png";
import tatyana from "../assets/img/tatyana.png";
import alisa from "../assets/img/alisa.png";
import gym1 from "../assets/img/gym1.jpg";
import gym2 from "../assets/img/gym2.jpg";
import gym3 from "../assets/img/gym3.jpg";
import gym4 from "../assets/img/gym4.jpg";
import gym5 from "../assets/img/gym5.jpg";
import gym6 from "../assets/img/gym6.jpg";
import ic from "../assets/img/ic4.png";
import location from "../assets/img/location.png";
import truba from "../assets/img/truba.png";
import email from "../assets/img/email.png";
import dumb from "../assets/img/dumb.png";
import ship from "../assets/img/ship.png";
import "animate.css";
import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";

import { ScrollContext } from "../utils/scrollcontext";
// ПОЯВЛЕНИЕ АНИМАЦИЙ

// КОНТАКТЫ


const Main = () => {

  const { ref } = useContext(ScrollContext)

  return (
    <div className="w-[100%]">
      <div className="background w-[100%] h-[1030px] bg-white bg-fixed bg-center bg-cover">
        <h1 className="text-white pt-[250px] pl-[270px] font-bold text-[52px] flex flex-col">
          IRON CLUB{" "}
          <span className="text-[14px] font-thin">
            СПОРТИВНЫЙ КЛУБ ДЛЯ ТЕХ, КТО ХОЧЕТ{" "}
            <span className="text-[#FFE70C]">СОВЕРШЕНСТВОВАТЬ</span> СЕБЯ
          </span>
        </h1>

        <div className="text-white flex flex-col pl-[300px] pt-[60px] gap-3 text-[18px] ">
          <span>• Опытные тренеры</span>
          <span>• Просторный зал</span>
          <span>• Крутое оборудование</span>
          <span>• Оригинальная атмосфера</span>
        </div>
      </div>
      <div className="text-[#E4E4E4] text-[390px] flex flex-col items-center w-full mt-[0px] overflow-x-hidden z-0 starter">
        <span className="leading-[110px] ">ТРЕНЕРЫ</span>
        <span>ТРЕНЕРЫ</span>
        <span className="leading-[110px]">ТРЕНЕРЫ</span>
        <span>ТРЕНЕРЫ</span>
        <div className="z-1 absolute flex flex-row gap-20 mt-60 overflow-hidden">
          <div className="flex flex-col items-center traineranimleft box1">
            <img src={alexey} className="h-[500px] " />
            <button className="w-[250px] h-[80px] text-black text-[30px] border-2 glass mt-5">
              записаться
            </button>
          </div>
          <div className="flex flex-col items-center traineranimleft box2">
            <img src={kirill} className="h-[500px] " />
            <button className="w-[250px] h-[80px] text-black text-[30px] border-2 glass mt-5">
              записаться
            </button>
          </div>
          <div className="flex flex-col items-center traineranimright box3">
            <img src={tatyana} className="h-[500px] " />
            <button className="w-[250px] h-[80px] text-black text-[30px] border-2 glass mt-5">
              записаться
            </button>
          </div>
          <div className="flex flex-col items-center traineranimright box4">
            <img src={alisa} className="h-[500px] " />
            <button className="w-[250px] h-[80px] text-black text-[30px] border-2 glass mt-5">
              записаться
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center my-40 starter overflow-hidden">
        <h1 className="text-[80px]">ГАЛЕРЕЯ</h1>
        <div className="flex flex-row gap-10">
          <img src={gym1} className="h-[300px] box1" />
          <img src={gym2} className="h-[300px] box5" />
          <img src={gym3} className="h-[300px] box3" />
        </div>
        <div className="flex flex-row gap-10 mt-10">
          <img src={gym4} className="h-[300px] box2" />
          <img src={gym5} className="h-[300px] box5" />
          <img src={gym6} className="h-[300px] box4" />
        </div>
      </div>
      <div className="flex flex-col justify-center items-center mt-40">
        <h1 className="text-[60px]">ГДЕ МЫ НАХОДИМСЯ</h1>
        <div className="w-full h-[600px] bg-[#E4E4E4] mt-10">
          <YMaps>
            <div className="w-full h-[600px] flex justify-center items-center">
              <Map
                width={1200}
                height={500}
                defaultState={{
                  center: [54.646724, 83.304900],
                  zoom: 15,
                  controls: ["zoomControl", "fullscreenControl"],
                }}
                modules={["control.ZoomControl", "control.FullscreenControl"]}
              >
                <Placemark
                  modules={["geoObject.addon.balloon"]}
                  geometry={[54.646724, 83.304900]}
                  properties={{
                    balloonContentBody: "ул. Пыльная д. не видно ",
                  }}
                  options={{
                    iconLayout: "default#image",
                    iconImageHref: ic,
                    iconImageSize: [40, 40],
                  }}
                />
              </Map>
            </div>
          </YMaps>
        </div>
      </div>
      <div ref={ref} className="bg-[#FFE70C] flex flex-col items-center p-5 gap-8 ">
        <h1 className="flex flex-row gap-3">
          <img src={location} height={20} width={20} /> Россия, город Хороший,
          улица Пыльная дом Не видно
        </h1>
        <h1 className="flex flex-row gap-3">
          {" "}
          <img src={truba} height={22} width={22} />
          +7(912) 345 67-89
        </h1>
        <h1 className="flex flex-row gap-3">
          {" "}
          <img src={email} height={22} width={22} />
          ironclub@gmail.com
        </h1>
        <h1 className="flex flex-row gap-3">
          {" "}
          <img src={dumb} height={24} width={24} />
          Режим работы: 9:00 - 23:00 | Выходные дни: 10:00 - 22:00
        </h1>
        <h1 className="flex flex-row gap-3">
          {" "}
          <img src={ship} height={24} width={24} />
          Отправка каждые 2 дня
        </h1>
      </div>
      <div className="bg-[#1e1e1e] flex flex-col items-center justify-center gap-5">
        <span className="text-[#e1e1e1] w-[1000px] flex items-center justify-center font-thin text-[14px]">
          Владельцы и создатели сайта ironclub.ru не несут ответственность за
          использование материалов, доступных на сайте.
        </span>
        <span className="text-[#e1e1e1] w-[1000px] flex items-center justify-center font-thin text-[14px]">
          Все материалы размещены исключительно в ознакомительных целях, НЕ для
          продажи.
        </span>
        <span className="text-[#e1e1e1] w-[1000px] flex items-center justify-center font-thin text-center text-[14px]">
          Вся материалы и ссылки, расположенные на сайте предназначены только
          для удовлетворения любопытства уважаемых посетителей, владельцы и
          создатели сайта не несут ответственность за возможные последствия
          использования их в целях, запрещенных законами Российской Федерации.
        </span>
      </div>
    </div>
  );
};

export default Main;
