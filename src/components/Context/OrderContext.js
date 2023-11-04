import React, { createContext, useReducer } from "react";

const OrderContext = createContext();

function orderReducer(state, action) {
  switch (action.type) {
    case "ADD_TO_ORDER":
      const item = state.find((item) => item.ID === action.payload.ID);
      if (item) {
        item.Quantity += 1;
        return [...state];
      } else {
        // chưa có staffId nên tạm thời để mặc đinh
        return [...state, { ...action.payload, Quantity: 1 }];
      }
    case "REMOVE_FROM_ORDER":
      return state.filter((item) => item.ID !== action.payload.ID);
    case "INCREMENT_QUANTITY":
      return state.map((item) =>
        item.id === action.payload.id
          ? { ...item, Quantity: item.Quantity + 1 }
          : item
      );
    case "DECREMENT_QUANTITY":
      return state.map((item) =>
        item.id === action.payload.id
          ? { ...item, Quantity: item.Quantity - 1 }
          : item
      );
    case "UPDATE_QUANTITY":
      return state.map((item) =>
        item.id === action.payload.id
          ? { ...item, Quantity: action.payload.Quantity }
          : item
      );
    case "EMPTY_ORDER":
      return [];
    default:
      return state;
  }
}

const OrderProvider = ({ children }) => {
  const [orderDetails, dispatch] = useReducer(orderReducer, []);

  const addToOrder = (item) => {
    dispatch({ type: "ADD_TO_ORDER", payload: item });
  };

  const removeFromOrder = (item) => {
    dispatch({ type: "REMOVE_FROM_ORDER", payload: item });
  };

  const increaseQuantity = (item) => {
    dispatch({ type: "INCREMENT_QUANTITY", payload: item });
  };

  const decreaseQuantity = (item) => {
    dispatch({ type: "DECREMENT_QUANTITY", payload: item });
  };

  const updateQuantity = (item, Quantity) => {
    dispatch({ type: "UPDATE_QUANTITY", payload: { id: item.id, Quantity } });
  };

  const emptyOrder = () => {
    dispatch({ type: "EMPTY_ORDER" });
  };

  let values = {
    orderDetails,
    addToOrder,
    removeFromOrder,
    increaseQuantity,
    decreaseQuantity,
    updateQuantity,
    emptyOrder,
  };

  return (
    <OrderContext.Provider value={values}>{children}</OrderContext.Provider>
  );
};

export { OrderProvider, OrderContext };
