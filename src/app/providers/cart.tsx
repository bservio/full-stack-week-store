import { Product } from "@prisma/client";
import { ReactNode, createContext } from "react";

interface CartProduct extends Product {
  quantity: number;
}

interface ICartContext {
  products: CartProduct[];
  cartTotalPrice: number;
  cartBasePrice: number;
  cartTotalDiscount: number;
}

const CartContext = createContext<ICartContext>({
  products: [],
  cartBasePrice: 0,
  cartTotalDiscount: 0,
  cartTotalPrice: 0,
});

const CartContextProvider = ({ children }: { children: ReactNode }) => {
  return (
    <CartContext.Provider
      value={{
        cartBasePrice: 0,
        cartTotalDiscount: 0,
        cartTotalPrice: 0,
        products: [],
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;