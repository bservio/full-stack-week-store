"use client";
import { ProductWithTotalPrice } from "@/helpers/products";

type ProductInfoProps = Pick<
  ProductWithTotalPrice,
  "basePrice" | "name" | "discountPercentage" | "totalPrice"
>;

const ProductInfo = ({
  name,
  basePrice,
  discountPercentage,
  totalPrice,
}: ProductInfoProps) => {
  return (
    <div className="px-5">
      <h2>{name}</h2>
    </div>
  );
};

export default ProductInfo;
