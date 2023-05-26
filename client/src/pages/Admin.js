import React, {useState} from "react";
import CreateBrand from "../components/modals/CreateBrand";
import CreateType from "../components/modals/CreateType";
import CreateProduct from "../components/modals/CreateProduct";



const Admin = () => {


    const [TypeIsShowing, setTypeIsShowing] = useState(false);
    const [BrandIsShowing, setBrandIsShowing] = useState(false);
    const [ProductIsShowing, setProductIsShowing] = useState(false);
    const openTypeModal = () => {
      setTypeIsShowing(true);
    };
    const closeTypeModal = () => {
      setTypeIsShowing(false);
    };
    const openBrandModal = () => {
      setBrandIsShowing(true);
    };
    const closeBrandModal = () => {
      setBrandIsShowing(false);
    };    
    const openProductModal = () => {
      setProductIsShowing(true);
    };
    const closeProductModal = () => {
      setProductIsShowing(false);
    };

    return (
        <div className="mt-[100px] flex flex-col gap-10 items-center">
            <button className="bg-[#FFE70C]  p-5" onClick={() => openTypeModal()}>добавить тип</button>
            <button className="bg-[#FFE70C]  p-5" onClick={() => openBrandModal()}>добавить бренд</button>
            <button className="bg-[#FFE70C]  p-5" onClick={() => openProductModal()}>добавить продукт</button>
            <CreateBrand closeBrandModal={closeBrandModal} BrandIsShowing={BrandIsShowing}/>
            <CreateType closeTypeModal={closeTypeModal} TypeIsShowing={TypeIsShowing}/>
            <CreateProduct closeProductModal={closeProductModal} ProductIsShowing={ProductIsShowing}/>
        </div>
    );
};

export default Admin;