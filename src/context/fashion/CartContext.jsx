import { createContext, useReducer } from "react";
import cartReducer from "./CartReducer";


const CartContext = createContext();


export const CartProvider = ({ children }) => {
  // Initial State of the cart
  const initialState = {
    cartItems: [],
    checkout: false,
  };


  // Set up the reducer
  const [state, dispatch] = useReducer(cartReducer, initialState);




  // Add item to store from cart
  const addToCart = (payload) => {
    dispatch({
      type: "ADD_TO_CART",
      payload,
    });
  };




  // Increase item in cart
  const increase = (payload) => {
    dispatch({
      type: "INCREASE",
      payload,
    });
  };




  // Decrease item in cart
  const decrease = (payload) => {
    dispatch({
      type: "DECREASE",
      payload,
    });
  };




  // Remove an item from the cart
  const removeFromCart = (payload) => {
    dispatch({
      type: "REMOVE_ITEM",
      payload,
    });
  };




  // Function to clear the cart
  const clearCart = () => {
    dispatch({
      type: "CLEAR",
    });
  };




  // Function to handle when the user clicks the checkout button
  const handleCheckout = () => {
    dispatch({ 
      type: "CHECKOUT",
    });
  };




  return (
    <CartContext.Provider
      value={{
        ...state,
        cartItems: state.cartItems,
        handleCheckout,
        clearCart,
        removeFromCart,
        addToCart,
        decrease,
        increase,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};



export default CartContext;
