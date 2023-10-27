"use client";
import { CartContext } from "@/providers/cart";
import { Button } from "@/components/ui/button";
import DiscountBadge from "@/components/ui/discount-badge";
import { ProductWithTotalPrice } from "@/helpers/products";
import { ChevronLeft, ChevronRight, TruckIcon } from "lucide-react";
import { useState, useContext } from "react";

interface ProductInfoProps {
  product: ProductWithTotalPrice;
}

const ProductInfo = ({ product }: ProductInfoProps) => {
  const [productQuantity, setProductQuantity] = useState(1);

  const { addProductToCart } = useContext(CartContext);

  const handleDecreaseButtonClick = () => {
    setProductQuantity((prev) => (prev === 1 ? prev : prev - 1));
  };

  const handleIncreaseButtonClick = () => {
    setProductQuantity((prev) => prev + 1);
  };

  const handleAddToCartClick = () => {
    addProductToCart({ ...product, productQuantity });
  };
  return (
    <div className="flex flex-col px-5">
      <h2 className="text-lg">{product.name}</h2>

      <div className="flex items-center gap-2">
        <h1 className="text-xl font-bold">
          R$ {product.totalPrice.toFixed(2)}
        </h1>
        {product.discountPercentage > 0 && (
          <DiscountBadge>{product.discountPercentage}</DiscountBadge>
        )}
      </div>
      {product.discountPercentage > 0 && (
        <p className="text-sm line-through opacity-75">
          R$ {Number(product.basePrice).toFixed(2)}
        </p>
      )}
      <div className="mt-8 flex items-center">
        <Button variant="outline" onClick={handleDecreaseButtonClick}>
          <ChevronLeft size={14} />
        </Button>
        <span className=" text-sm">{productQuantity}</span>
        <Button variant="outline" onClick={handleIncreaseButtonClick}>
          <ChevronRight size={14} />
        </Button>
      </div>

      <div className="mt-3 flex flex-col gap-3">
        <h3 className="font-bold">Descrição</h3>
        <p className="text-sm opacity-75">{product.description}</p>
      </div>

      <Button
        className="mt-8 font-bold uppercase"
        onClick={handleAddToCartClick}
      >
        Adicionar ao carrinho
      </Button>

      <div className="mt-5 flex items-center justify-between rounded-lg bg-accent px-5 py-2">
        <div className="flex items-center gap-2">
          <TruckIcon />

          <div className="flex flex-col">
            <p className="text-xs">
              Entrega via <span className="font-bold">FSPacket®</span>
            </p>
            <p className="text-xs text-[#8162FF]">
              Envio para <span className="font-bold">todo Brasil</span>
            </p>
          </div>
        </div>

        <p className="text-xs font-bold">Frete grátis</p>
      </div>
    </div>
  );
};

export default ProductInfo;
