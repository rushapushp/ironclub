import React, { useContext, useEffect } from "react";
import TypeBar from "../components/TypeBar";
import BrandBar from "../components/BrandBar";
import ProductList from "../components/ProductList";
import { observer } from "mobx-react-lite";
import { Context } from "../index";
import { fetchBrands, fetchProducts, fetchTypes } from "../http/productAPI";

const Shop = observer(() => {

    const {product} = useContext(Context)

    useEffect ( () => {
        fetchTypes().then(data => product.setTypes(data))
        fetchBrands().then(data => product.setBrands(data))
        fetchProducts().then(data => product.setProducts(data.rows ))
    }, [] )

    useEffect(() => {
        fetchProducts(product.selectedType.id, product.selectedBrand.id).then(data => {
            product.setProducts(data.rows)
            
        })
    }, [product.selectedType, product.selectedBrand,])

    return (
        <div className="mx-[50px] gap-5 flex flex-row">
            
            <TypeBar className="flex"/>
            
            <div className="flex flex-col">
            <BrandBar className="flex"/>
            
            <ProductList className="flex flex-row"/>
            </div>
        </div>
    );
});

export default Shop;