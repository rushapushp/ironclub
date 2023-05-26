import React, { useState, useContext, useEffect } from "react";
import Modal from "react-modal";
import { Context } from "../..";
import { observer } from "mobx-react-lite";
import {
  fetchNames,
  fetchAges,
  fetchExps,
  fetchPhonenumbers,
  fetchTrainers,
  createClient,
} from "../../http/clientAPI";

Modal.setAppElement(document.getElementById("root"));

const styles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    transform: "translate(-50%, -50%)",
    padding: "0",
    border: "none",
    zIndex: "100",
    background:
      "linear-gradient(130deg, rgba(58, 58, 58, 0.404), rgba(63, 63, 63, 0.315))",
    ["backdrop-filter"]: "blur(8px)",
    backdropFilter: "blur(8px)",
    border: "2px solid rgba(41, 41, 41, 0.18)",
    boxShadow: "0 8px 20px 0 rgba(0, 0, 0, 0.37)",
  },
};

const TrainerModal = observer(
  ({ closeTrainerModal, TrainerModalIsShowing }) => {
    const { client } = useContext(Context);

    const [name1, setName1] = useState("");
    const [name2, setName2] = useState("");
    const [name3, setName3] = useState("");
    const [age, setAge] = useState("");
    const [exp, setExp] = useState("");
    const [pn, setPN] = useState("");
    const [trainer, setTrainer] = useState("");

    useEffect(() => {
      fetchNames().then((data) => client.setNames(data));
      fetchAges().then((data) => client.setAges(data));
      fetchExps().then((data) => client.setExps(data));
      fetchPhonenumbers().then((data) => client.setPhonenumbers(data));
      fetchTrainers().then((data) => client.setTrainers(data));
    }, []);

    const handleName1Change = (e) => {
      setName1(e.target.value);
    };
    const handleName2Change = (e) => {
      setName2(e.target.value);
    };

    const handleName3Change = (e) => {
      setName3(e.target.value);
    };
    const handleAgeChange = (e) => {
      setAge(e.target.value);
    };

    const handleExpChange = (e) => {
      setExp(e.target.value);
    };

    const handlePhonenumberChange = (e) => {
      setPN(e.target.value);
    };

    const handleTrainerChange = (e) => {
      setTrainer(e.target.value);
    };



    const fullName = name1 + " " + name2 + " " + name3;

    let availableTrainers = ["Иванов Алексей Николаевич - бодибилдинг", "Сарычев Кирилл Игоревич - пауэрлифтинг", "Кузнецова Татьяна Дмитриевна - кроссфит", "Иванова Алиса Сергеевна - фитнес"];

    const addClient = () => {
      const formData = new FormData();
      formData.append("name", fullName);
      formData.append("age", age);
      formData.append("exp", exp);
      formData.append("phonenumber", pn);
      formData.append("trainer", trainer);
      createClient(formData).then((data) => closeTrainerModal());
      console.log("записано", formData);
    };

    const [DDModalOpen, setDDModalOpen] = useState(false);
    const handleDDModalOpen = () => {
      setDDModalOpen(!DDModalOpen);
    };

    return (
      <Modal isOpen={!!TrainerModalIsShowing} style={styles}>
        <div className="flex flex-col items-center justify-center gap-8 w-[800px] h-[800px] ">
          <h1 className="text-[30px]">записаться на тренировку</h1>

          <div className="flex flex-col gap-3 items-center">
            <button
              onClick={handleDDModalOpen}
              className="flex flex-col hover:text-[#FFE70C] "
            >
              {trainer || "выберите тренера ▼"}
              {/* меняется название дропдауна */}
            </button>
            {DDModalOpen ? (
              <div className="text-[15px] text-[#e4e4e4]"></div>
            ) : (
              <div></div>
            )}
            {DDModalOpen ? (
              <ul className="flex flex-col ">
                {availableTrainers.map((availableTrainers) => (
                  <button
                    key={availableTrainers}
                    className="hover:bg-[#FFE70C] focus:bg-[#FFE70C] p-3"
                    onClick={() => setTrainer(availableTrainers)}
                  >
                    {availableTrainers}
                  </button>
                ))}
              </ul>
            ) : null}
          </div>

          <div className="flex flex-row">
            <div className="flex flex-col items-center justify-center gap-4 px-2">
              <input
                className="p-3"
                placeholder="Имя"
                value={name1}
                onChange={handleName1Change}
              ></input>
              <input
                className="p-3"
                placeholder="Фамилия"
                value={name2}
                onChange={handleName2Change}
              ></input>
              <input
                className="p-3"
                placeholder="Отчество"
                value={name3}
                onChange={handleName3Change}
              ></input>
            </div>
            <div className="flex flex-col items-center justify-center gap-4 px-2">
              <input
                className="p-3"
                placeholder="Возраст"
                value={age}
                onChange={handleAgeChange}
              ></input>
              <input
                className="p-3"
                placeholder="Стаж тренировок"
                value={exp}
                onChange={handleExpChange}
              ></input>
              <input
                className="p-3"
                placeholder="Номер телефона"
                value={pn}
                onChange={handlePhonenumberChange}
              ></input>
            </div>
          </div>
          <div className="flex flex-row gap-5">
            <button
              className="bg-[#cf0c0c] p-5 text-white"
              onClick={() => closeTrainerModal()}
            >
              закрыть
            </button>
            <button className="bg-[#FFE70C] p-5" onClick={addClient}>
              оставить заявку
            </button>
          </div>
        </div>
      </Modal>
    );
  }
);

export default TrainerModal;
