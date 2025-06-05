import { createContext } from "react";
import { food_list } from "../assets/assets";
import { useState } from "react";
import { useEffect } from "react";

export const StoreContext = createContext(null)

const StoreContextProvider = (props) =>{



    const[cartItems,setCartItems] = useState({});
    const addTocart = (itemId) =>{
           if(!cartItems[itemId]){
            setCartItems((prev) =>({...prev,[itemId]:1}))
           }
           else{
             setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
           }
    }

    const  removefromCart = (itemId) =>{
        setCartItems((prev) =>({...prev,[itemId]:prev[itemId]-1}))
    }
    
    const getTotalcartAmt = () =>{
        let totalAmt = 0;
        for(const item in cartItems){
            if(cartItems[item]>0){
                let itemInfo = food_list.find((product)=>product._id===item);
                 totalAmt += itemInfo.price* cartItems[item];
            }
            
        }
        return totalAmt;
    }
    


    const contextValue = {
        // creating object that can be accesed anywhere
        food_list,
        cartItems,
        setCartItems,
        addTocart,
        removefromCart,
        getTotalcartAmt

    }
    return(
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )

}
export default StoreContextProvider