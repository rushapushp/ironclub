import React from "react";
import { useContext } from "react";
import { observer } from "mobx-react-lite";
import { Context } from "../index";

const TypeBar = observer(() => {
  const { product } = useContext(Context);
  return (
    <div className="flex flex-col  items-center mt-[70px]">
        <h1 className="text-[56px] text-[#E4E4E4]">категория</h1>
    <div className=" bg-[#E4E4E4] flex flex-col w-[300px] ">
        
      {product.types.map((type) => (
        <button className=" active:bg-yellow-400 focus:bg-yellow-400 p-5"
        active={type.id === product.selectedType.id}
        key={type.id} 
        onClick={() => product.setSelectedType(type)}>
        {type.name}
        </button>
      ))}
    </div>
    </div>
  );
});

export default TypeBar;
