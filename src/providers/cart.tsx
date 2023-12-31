"use client";

import { ProductWithTotalPrice } from "@/helpers/products";

import { ReactNode, createContext, useMemo, useState } from "react";

export interface CartProduct extends ProductWithTotalPrice {
  productQuantity: number;
}

interface ICartContext {
  products: CartProduct[];
  cartTotalPrice: number;
  cartBasePrice: number;
  cartTotalDiscount: number;
  subtotal: number;
  total: number;
  totalDiscount: number;
  addProductToCart: (product: CartProduct) => void;
  decreaseProductQuantity: (productId: string) => void;
  increaseProductQuantity: (productId: string) => void;
  removeProductFromCart: (productId: string) => void;
}

export const CartContext = createContext<ICartContext>({
  products: [],
  cartBasePrice: 0,
  cartTotalDiscount: 0,
  cartTotalPrice: 0,
  subtotal: 0,
  total: 0,
  totalDiscount: 0,
  addProductToCart: () => {},
  decreaseProductQuantity: () => {},
  increaseProductQuantity: () => {},
  removeProductFromCart: () => {},
});

const CartContextProvider = ({ children }: { children: ReactNode }) => {
  const [products, setProducts] = useState<CartProduct[]>([]);

  const subtotal = useMemo(() => {
    return products.reduce((acc, product) => {
      return acc + Number(product.basePrice) * product.productQuantity;
    }, 0);
  }, [products]);

  const total = useMemo(() => {
    return products.reduce((acc, product) => {
      return acc + product.totalPrice * product.productQuantity;
    }, 0);
  }, [products]);

  const totalDiscount = subtotal - total;

  const addProductToCart = (product: CartProduct) => {
    //verificar se o produto já está no carrinho
    const productIsAlreadyOnCart = products.some(
      (cartProduct) => cartProduct.id === product.id,
    );

    //se já estiver, adicionar a quantidade à quantidade já existente no carrinho
    if (productIsAlreadyOnCart) {
      setProducts((prev) =>
        prev.map((cartProduct) => {
          if (cartProduct.id === product.id) {
            return {
              ...cartProduct,
              productQuantity:
                cartProduct.productQuantity + product.productQuantity,
            };
          }
          return cartProduct;
        }),
      );

      return;
    }

    //senão, adicione o produto à lista
    setProducts((prev) => [...prev, product]);
  };

  const decreaseProductQuantity = (productId: string) => {
    setProducts((prev) =>
      prev
        .map((cartProduct) => {
          if (cartProduct.id === productId) {
            return {
              ...cartProduct,
              productQuantity: cartProduct.productQuantity - 1,
            };
          }
          return cartProduct;
        })
        .filter((cartProduct) => cartProduct.productQuantity > 0),
    );
  };

  const increaseProductQuantity = (productId: string) => {
    setProducts((prev) =>
      prev.map((cartProduct) => {
        if (cartProduct.id === productId) {
          return {
            ...cartProduct,
            productQuantity: cartProduct.productQuantity + 1,
          };
        }

        return cartProduct;
      }),
    );
  };

  const removeProductFromCart = (productId: string) => {
    setProducts((prev) =>
      prev.filter((cartProduct) => cartProduct.id !== productId),
    );
  };

  return (
    <CartContext.Provider
      value={{
        cartBasePrice: 0,
        cartTotalDiscount: 0,
        cartTotalPrice: 0,
        products,
        subtotal,
        total,
        totalDiscount,
        addProductToCart,
        decreaseProductQuantity,
        increaseProductQuantity,
        removeProductFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
