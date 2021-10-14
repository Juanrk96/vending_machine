import React from "react";
import Vend from "./vending";
import 'bootstrap/dist/css/bootstrap.css'


const ProductList = ({products}) => (
    
        <tbody align="center">
    {
        products.map((vendding) =>{
            return(
            
                <Vend 
                key ={vendding.id}
                name={vendding.name}
                thumbnail={vendding.thumbnail}
                preparation_time={vendding.preparation_time}
                />
            
            )
        })
    }    </tbody>                
  

)

 export default ProductList
