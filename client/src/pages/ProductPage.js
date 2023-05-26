import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchOneProduct } from "../http/productAPI";
import { addToCart } from "../http/productAPI";

const ProductPage = () => {
  const [product, setProduct] = useState({ info: []});

  const { id } = useParams();
  useEffect(() => {
    fetchOneProduct(id).then(data => 
      setProduct(data));
  }, []);

  const adding = () => {
    const formData = new FormData();
    formData.append("productId", id);
    addToCart(formData).then(data =>
      alert(`Товар ` + product.name + ` был добавлен в вашу корзину!`)
    );
  };

  return (
    <div className="flex flex-row justify-center">
      <div className="h-[923px] mt-[50px] w-[1300px] bg-[#e4e4e4] ">
        <div className="flex flex-row p-5 gap-5">
          <img
            src={process.env.REACT_APP_API_URL + product.img}
            height={500}
            width={500}
          />
          <div className="flex flex-col items-center justify-start w-[750px] gap-3">
            <h1 className="text-[40px]">{product.name}</h1>
            <div>
            {/* {product.brands.map(brand => <div>{brand.id === prod.brandId ? `${brand.name}` : ''}</div>)} */}
            </div>
            <h1 className="text-[20px] text-slate-600">
              Артикул: {product.typeId}.{product.brandId}.{product.id}
            </h1>
            <h1 className="w-[600px] text-center">
            {product.description}</h1>
          </div>
        </div>
        <div className="flex flex-col items-center gap-5 m-5 ">
          <h1 className="text-[50px] ">{product.price}₽</h1>
          <button
            className="bg-[#FFE70C] text-[30px] w-[300px] p-5"
            onClick={adding}
          >
            добавить в корзину
          </button>
          <h1> </h1>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
