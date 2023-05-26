import React, {useState} from "react";
import location from "../assets/img/location.png";
import truba from "../assets/img/truba.png";
import email from "../assets/img/email.png";
import dumb from "../assets/img/dumb.png";
import ship from "../assets/img/ship.png";
import alexey from "../assets/img/alexey.png";
import kirill from "../assets/img/kirill.png";
import tatyana from "../assets/img/tatyana.png";
import alisa from "../assets/img/alisa.png";
import check from "../assets/img/check.png";
import TrainerModal from "../components/modals/TrainerModal";

const Trainers = () => {

  const [TrainerModalIsShowing, setTrainerModalIsShowing] = useState(false);

  const openTrainerModal = () => {
    setTrainerModalIsShowing(true);
  };

  const closeTrainerModal = () => {
    setTrainerModalIsShowing(false);
  };

  

  return (
    <div className="w-[100%] ">
      <div className="flex flex-col items-center   ">
        <div className="w-[1400px] h-[500px] bg-[#e1e1e1] mt-[70px]">
          <div className=" flex flex-row m-12">
            <img src={alexey} className="h-[400px]" />
            <div className="flex flex-col mx-10 gap-6">
              <h1 className="text-[40px]">Бодибилдинг - тренер Иванов Алексей Николаевич</h1>

              <ul className="list-disc mx-10 flex flex-col gap-5">
                <li>Составление персонального плана тренировок и питания</li>
                <li>Поддержание физической формы и здоровья</li>
                <li>
                  Ведение спортсмена и подготовка к региональным соревнованиям
                  по бодибилдингу (Men's Phisique, Classic Bodybuilding)
                </li>
                <li>
                  <a
                    href="https://fbbracademy.ru/education"
                    className="flex gap-1 text-[#0000FF]"
                  >
                    Международный диплом IFBB
                    <img src={check} height={18} width={18} />
                  </a>
                </li>
              </ul>
              <div className="flex flex-row mx-6 gap-12">
                <div className="flex flex-row">
                  <button className="bg-[#FFE70C] w-[200px] flex flex-col items-center" onClick={() => openTrainerModal()}>1 тренировка <span className="text-[40px]">399₽</span></button>
                  <span className="flex justify-center items-center m-5">ИЛИ</span>
                  <button className="bg-[#FFE70C] w-[200px] flex flex-col items-center" onClick={() => openTrainerModal()}>12 тренировок <span className="text-[40px]">3 999₽</span></button>
                  <TrainerModal closeTrainerModal={closeTrainerModal} TrainerModalIsShowing={TrainerModalIsShowing}/>
                </div>
                
              </div>
            </div>
          </div>
        </div>
        <div className="w-[1400px] h-[500px] bg-[#e1e1e1] mt-[70px]">
          <div className=" flex flex-row m-12">
            <img src={kirill} className="h-[400px]" />
            <div className="flex flex-col mx-10 gap-6">
              <h1 className="text-[40px]">Пауэрлифтинг - тренер Сарычев Кирилл Игоревич </h1>

              <ul className="list-disc mx-10 flex flex-col gap-5">
                <li>Составление персонального плана тренировок и питания</li>
                <li>Поддержание физической формы и здоровья</li>
                <li>
                  Ведение спортсмена и подготовка к региональным соревнованиям
                  по бодибилдингу (Men's Phisique, Classic Bodybuilding)
                </li>
                <li>
                  <a
                    href="https://fbbracademy.ru/education"
                    className="flex gap-1 text-[#0000FF]"
                  >
                    Международный диплом WRPF
                    <img src={check} height={18} width={18} />
                  </a>
                </li>
              </ul>
              <div className="flex flex-row mx-6 gap-12">
                <div className="flex flex-row">
                <button className="bg-[#FFE70C] w-[200px] flex flex-col items-center" onClick={() => openTrainerModal()}>1 тренировка <span className="text-[40px]">399₽</span></button>
                  <span className="flex justify-center items-center m-5">ИЛИ</span>
                  <button className="bg-[#FFE70C] w-[200px] flex flex-col items-center" onClick={() => openTrainerModal()}>12 тренировок <span className="text-[40px]">3 999₽</span></button>
                  <TrainerModal closeTrainerModal={closeTrainerModal} TrainerModalIsShowing={TrainerModalIsShowing}/>
                </div>
                
              </div>
            </div>
          </div>
        </div>
        <div className="w-[1400px] h-[500px] bg-[#e1e1e1] mt-[70px]">
        
          <div className=" flex flex-row m-12">
            <img src={tatyana} className="h-[400px]" />
            <div className="flex flex-col mx-10 gap-6">
              <h1 className="text-[40px]">Кроссфит - тренер Кузнецова Татьяна Дмитриевна</h1>

              <ul className="list-disc mx-10 flex flex-col gap-5">
                <li>Составление персонального плана тренировок и питания</li>
                <li>Поддержание физической формы и здоровья</li>
                <li>
                Контроль динамики результатов
                </li>
                <li>
                  <a
                    href="https://fbbracademy.ru/education"
                    className="flex gap-1 text-[#0000FF]"
                  >
                    Диплом тренера по Кросс-фиту
                    <img src={check} height={18} width={18} />
                  </a>
                </li>
              </ul>
              <div className="flex flex-row mx-6 gap-12">
                <div className="flex flex-row">
                  <button className="bg-[#FFE70C] w-[200px] flex flex-col items-center" onClick={() => openTrainerModal()}>1 тренировка <span className="text-[40px]">399₽</span></button>
                  <span className="flex justify-center items-center m-5">ИЛИ</span>
                  <button className="bg-[#FFE70C] w-[200px] flex flex-col items-center" onClick={() => openTrainerModal()}>12 тренировок <span className="text-[40px]">3 999₽</span></button>
                  <TrainerModal closeTrainerModal={closeTrainerModal} TrainerModalIsShowing={TrainerModalIsShowing}/>
                </div>
                
              </div>
            </div>
          </div>
        
        </div>
        <div className="w-[1400px] h-[500px] bg-[#e1e1e1] mt-[70px] mb-[70px]">
        <div className=" flex flex-row m-12">
            <img src={alisa} className="h-[400px]" />
            <div className="flex flex-col mx-10 gap-6">
              <h1 className="text-[40px]">Фитнес - тренер Иванова Алиса Сергеевна</h1>

              <ul className="list-disc mx-10 flex flex-col gap-5">
                <li>Составление персонального плана тренировок и питания</li>
                <li>Поддержание физической формы и здоровья</li>
                <li>
                Контроль динамики результатов
                </li>
                <li>
                  <a
                    href="https://fbbracademy.ru/education"
                    className="flex gap-1 text-[#0000FF]"
                  >
                    Диплом фитнес-тренера 
                    <img src={check} height={18} width={18} />
                  </a>
                </li>
              </ul>
              <div className="flex flex-row mx-6 gap-12">
                <div className="flex flex-row">
                  <button className="bg-[#FFE70C] w-[200px] flex flex-col items-center" onClick={() => openTrainerModal()}>1 тренировка <span className="text-[40px]">399₽</span></button>
                  <span className="flex justify-center items-center m-5">ИЛИ</span>
                  <button className="bg-[#FFE70C] w-[200px] flex flex-col items-center" onClick={() => openTrainerModal()}>12 тренировок <span className="text-[40px]">3 999₽</span></button>
                  <TrainerModal closeTrainerModal={closeTrainerModal} TrainerModalIsShowing={TrainerModalIsShowing}/>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#FFE70C] flex flex-col items-center p-5 gap-8">
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
export default Trainers;
