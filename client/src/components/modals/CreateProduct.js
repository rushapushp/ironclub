import React, { useContext, useState, useEffect } from "react";
import Modal from "react-modal";
import { Context } from "../../index";
import {
  createProduct,
  fetchBrands,
  fetchProducts,
  fetchTypes,
} from "../../http/productAPI";
import { observer } from "mobx-react-lite";

Modal.setAppElement(document.getElementById("root"));

const customStyles = {
  content: {
    width: 800,
    height: 800,
    borderRadius: "0%",
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

const CreateProduct = observer(({ closeProductModal, ProductIsShowing }) => {
  const [DDTypeopen, setDDTypeOpen] = useState(false);
  const handleDDTypeopen = () => {
    setDDTypeOpen(!DDTypeopen);
  };

  const [DDBrandopen, setDDBrandOpen] = useState(false);
  const handleDDBrandopen = () => {
    setDDBrandOpen(!DDBrandopen);
  };

  const { product } = useContext(Context);

  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [file, setFile] = useState(null);
  const [description, setDescription] = useState("");

  useEffect(() => {
    fetchTypes().then((data) => product.setTypes(data));
    fetchBrands().then((data) => product.setBrands(data));
  }, []);

  // const selectFile = (e) => {
  //   setFile(e.target.files[0]);
  // };

  // const addInfo = () => {
  //   setInfo([...info, { title: '', description: '', number: Date.now() }]);
  //   };
  // const removeInfo = (number) => {
  //   setInfo(info.filter(i => i.number !== number));
  // };

  // const changeInfo = (key, value, number) => {
  //   setInfo(
  //     info.map((i) => (i.number === number ? { ...i, [key]: value } : i))
  //   );
  // };
  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };
  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handlePriceChange = (e) => {
    setPrice(e.target.value);
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const addProduct = () => {
    const formData = new FormData();
    formData.append("name", name);
    formData.append("price", price);
    formData.append("img", file);
    formData.append("brandId", product.selectedBrand.id);
    formData.append("typeId", product.selectedType.id);
    formData.append("description", description);
    createProduct(formData).then((data) => closeProductModal());
    // console.log(info);
  };

  return (
    <Modal isOpen={!!ProductIsShowing} style={customStyles}>
      <div className="flex flex-col items-center gap-10 ">
        <div className="text-[50px] text-[#e4e4e4]">добавление продукта</div>

        {/* дропдаун = DD*/}
        <div className="flex flex-row gap-12">
          <div className="flex flex-col gap-3 items-center">
            <button
              onClick={handleDDTypeopen}
              className="flex flex-col hover:text-[#FFE70C] "
            >
              {product.selectedType.name || "ТИП ПРОДУКТА"}
              {/* меняется название дропдауна */}
            </button>
            {DDTypeopen ? (
              <div className="text-[15px] text-[#e4e4e4]">выберите тип</div>
            ) : (
              <div></div>
            )}
            {DDTypeopen ? (
              <ul className="flex flex-col ">
                {product.types.map((type) => (
                  <button
                    key={type.id}
                    className="hover:bg-[#FFE70C] focus:bg-[#FFE70C] p-3"
                    onClick={() => product.setSelectedType(type)}
                  >
                    {type.name}
                  </button>
                ))}
              </ul>
            ) : null}
          </div>

          <div className="flex flex-col gap-3 items-center">
            <button
              onClick={handleDDBrandopen}
              className="flex flex-col hover:text-[#FFE70C]"
            >
              {product.selectedBrand.name || "БРЕНД ПРОДУКТА"}
              {/* не меняется название дропдауна */}
            </button>
            {DDBrandopen ? (
              <div className="text-[15px] text-[#e4e4e4]">выберите бренд</div>
            ) : (
              <div></div>
            )}
            {DDBrandopen ? (
              <ul className="flex flex-col ">
                {product.brands.map((brand) => (
                  <button
                    key={brand.id}
                    className="hover:bg-[#FFE70C] focus:bg-[#FFE70C] p-3"
                    onClick={() => product.setSelectedBrand(brand)}
                  >
                    {brand.name}
                  </button>
                ))}
              </ul>
            ) : null}
          </div>
        </div>

        <input 
          placeholder="Введите название"
          className="w-[300px] p-2"
          value={name}
          onChange={handleNameChange}
          
        />
        <input
          type="number"
          placeholder="Введите цену"
          className="w-[300px] p-2"
          value={price}
          onChange={handlePriceChange}
        />
        <input type="file" onChange={handleFileChange}  className="ml-32"/>
        {/* дропдаун */}

        <button
        // onClick={addInfo}
        >
          добавьте характеристику продукта
        </button>
        {/* {info.map((i) => ( */}
        <div>
          {/* key={i.number} */}
          {/* <input
              placeholder="название "
              value={i.title}
              onChange={(e) => changeInfo("title", e.target.value, i.number)}
            ></input> */}
          <textarea className="p-2 w-[500px] h-[100px]"
            placeholder="описание"
            value={description}
            onChange={handleDescriptionChange}
            size={1000}
          ></textarea>
          
        </div>

        <div className="flex flex-row  gap-5">
          <button
            className="bg-[#cf0c0c] p-5 text-white"
            onClick={() => closeProductModal()}
          >
            закрыть
          </button>
          <button className="bg-[#FFE70C] p-5" onClick={addProduct}>
            добавить
          </button>
        </div>
      </div>
    </Modal>
  );
});

export default CreateProduct;
