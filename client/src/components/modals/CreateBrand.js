import React, { useState } from "react";
import Modal from "react-modal";
import { createBrand } from "../../http/productAPI";

Modal.setAppElement(document.getElementById("root"));

const CreateBrand = ({ closeBrandModal, BrandIsShowing }) => {

  const [value, setValue] = useState('')

  const addBrand = () => {
    createBrand({name: value}).then(data=> setValue(''))
    closeBrandModal()
  }
  
  return (
    <Modal isOpen={!!BrandIsShowing} >
      <div className="flex flex-col items-center justify-center gap-10">
      <div>Добавление бренда</div>
      <input placeholder="              название" value={value} onChange={e => setValue(e.target.value)}></input>
      <div className="flex flex-row gap-5">
      <button className="bg-[#cf0c0c] p-5 text-white" onClick={() => closeBrandModal()}>
        закрыть
      </button>
      <button className="bg-[#FFE70C] p-5" onClick={addBrand}>
        добавить
      </button>
      </div>
      </div>
    </Modal>
  );
};

export default CreateBrand;
