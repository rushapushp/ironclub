import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { PRODUCT_ROUTE } from "../utils/consts";
import { Context } from "..";

const ProductItem = ({ prod }) => {
  const { product } = useContext(Context)
  const navigate = useNavigate();
  const sale = product.price;
  const wosale = sale *0.1;
  return (
    <div
      className="mt-5 mr-5  w-[300px] h-[450px] p-5 bg-[#e4e4e4] flex flex-col justify-between"
      onClick={() => navigate(PRODUCT_ROUTE + "/" + prod.id)}
    >
      <div>
        <img src={process.env.REACT_APP_API_URL + prod.img} height={300} width={300} />
        <div className=" items-center justify-center mt-2 text-[20px] ">
          {prod.name}
        </div>
        <div className=" items-center justify-center mt-2 text-[13px] text-slate-600">
        {product.brands.map(brand => <div>{brand.id === prod.brandId ? `${brand.name}` : ''}</div>)}
         Артикул: {prod.typeId}.{prod.brandId}.{prod.id}
         
        </div>
      </div>
      <button className="bg-[#FFE70C] w-[150px] h-[50px] text-[28px]">
        {prod.price}₽ 
      </button>
    </div>
  );
};

export default ProductItem;