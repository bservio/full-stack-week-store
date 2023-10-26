"use client";
import { Button } from "@/components/ui/button";
import DiscountBadge from "@/components/ui/discount-badge";
import { ProductWithTotalPrice } from "@/helpers/products";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

interface ProductInfoProps {
  product: ProductWithTotalPrice;
}

const ProductInfo = ({ product }: ProductInfoProps) => {
  const [productQuantity, setProductQuantity] = useState(1);

  const handleDecreaseButtonClick = () => {
    setProductQuantity((prev) => (prev === 1 ? prev : prev - 1));
  };
  const handleIncreaseButtonClick = () => {
    setProductQuantity((prev) => prev + 1);
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
    </div>
  );
};

export default ProductInfo;
