import React from "react";
import { useContext } from "react";
import { observer } from "mobx-react-lite";
import { Context } from "../index";

const BrandBar = observer(() => {
  const { product } = useContext(Context);
  return (
    <div className="mt-[70px]">
      <div className="flex flex-row">
        <h1 className="text-[56px] text-[#E4E4E4]">бренд</h1>
        {/* <h1 className="text-[56px] text-[#E4E4E4] mx-10">поиск</h1> */}
        </div>
    <div className=" bg-[#E4E4E4] flex flex-row w-max h-10 ">
      {product.brands.map((brand) => (
        <button className="active:bg-yellow-400 focus:bg-yellow-400 p-3"
        key={brand.id}
        onClick={() => product.setSelectedBrand(brand)}
        border={brand.id === product.selectedBrand.id ? 'danger' : 'light'}
        >
            {brand.name}
        </button>
      ))}
    </div>
    </div>
  );
});

export default BrandBar;
