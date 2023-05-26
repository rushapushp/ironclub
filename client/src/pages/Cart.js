import React, { useContext, useState, useEffect } from "react";
import { Context } from "..";
import { observer } from "mobx-react-lite";
import { getCart } from "../http/productAPI";


const Cart = observer(() => {
  const { product } = useContext(Context);

  useEffect(() => {
    getCart().then((data) => {
      product.setCarts(data)
    });
  }, []);

  let prices = 0;
  product.cart.forEach(price => (prices += Number(price.product.price)));

  const handleDelete = (id) => {
    product.setCarts(product.cart.filter(i => i.id !== id))
  }

  return (
    <div className="flex flex-row justify-center ">
      <div className="h-full mt-[50px] w-[1300px] bg-[#e4e4e4] flex flex-col items-center gap-10 pt-5 pb-40">
        <div className="text-[50px]">корзина</div>
        {product.cart.map(i => 
        <div className="glass text-black w-[1100px]  flex flex-row justify-between"  key={i.id}>
          <div className=" flex flex-row p-5"  key={i.id}>
            <img className="w-[100px]" src={process.env.REACT_APP_API_URL + i.product.img} alt={i.product.name} />
            <div className="flex flex-col gap-5 mx-10">
              <h1 className="text-[30px]">{i.product.name}</h1>
              <h2 className="text-[20px]">{i.product.price} рублей</h2>
            </div>
            
          </div>
          <button className="bg-red-500 text-white w-10 h-10 " onClick={() => handleDelete(i.id)}>✕</button>
          </div>
        )}
      
        <div className="text-[50px]">сумма к оплате: {prices} рублей</div>
        <button className="bg-[#FFE70C] p-5 text-[30px]">оформить заказ</button>
      </div>
    </div>
  );
});

export default Cart;
