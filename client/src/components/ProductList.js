import React from "react";
import { useContext } from "react";
import { observer } from "mobx-react-lite";
import { Context } from "../index";
import ProductItem from "./ProductItem";

const ProductList = observer(() => {
    const {product} = useContext(Context)

    return (
        <div className="flex flex-row flex-wrap ">
            {product.products.map(product => 
              <ProductItem key={product.id} prod={product}  className="m-10"/>  )}
        
        </div>
    );
});

export default ProductList;