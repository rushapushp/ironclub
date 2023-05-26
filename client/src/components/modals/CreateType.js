import React, { useState } from "react";
import Modal from "react-modal";
import { createType } from "../../http/productAPI";

Modal.setAppElement(document.getElementById("root"));

const CreateType = ({ closeTypeModal, TypeIsShowing }) => {

  const [value, setValue] = useState('')

  const addType = () => {
    createType({name: value}).then(data=> setValue(''))
    closeTypeModal()
  }

  return (
    <Modal isOpen={!!TypeIsShowing} >
      <div className="flex flex-col items-center justify-center gap-10">
      <div>Добавление типа</div>
      <input placeholder="              название" value={value} onChange={e => setValue(e.target.value)}></input>
      <div className="flex flex-row gap-5">
      <button className="bg-[#cf0c0c] p-5 text-white" onClick={() => closeTypeModal()}>
        закрыть
      </button>
      <button className="bg-[#FFE70C] p-5" onClick={addType}>
        добавить
      </button>
      </div>
      </div>
    </Modal>
  );
};

export default CreateType;
