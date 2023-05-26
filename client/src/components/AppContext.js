// Контекст, в котором определены таблицы и функция для получения названия бренда
import { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';

export const Context = createContext();

const AppContext = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [brands, setBrands] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const productsResponse = await axios.get('/api/products');
      setProducts(productsResponse.data);

      const brandsResponse = await axios.get('/api/brands');
      setBrands(brandsResponse.data);
    };

    fetchData();
  }, []);

  const getBrandName = (brandId) => {
    const brand = brands.find((brand) => brand.id === brandId);
    return brand ? brand.name : '';
  };

  return (
    <Context.Provider value={{ products, brands, getBrandName }}>
      {children}
    </Context.Provider>
  );
};

export default AppContext;
