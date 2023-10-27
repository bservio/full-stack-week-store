import { CartContext } from "@/providers/cart";
import { useContext } from "react";
import { Badge } from "./badge";
import { ShoppingCartIcon } from "lucide-react";
import CartItem from "./cart-item";
import { computeProductTotalPrice } from "@/helpers/products";

const Cart = () => {
  const { products } = useContext(CartContext);

  return (
    <div className="flex flex-col gap-8">
      <Badge
        className="w-fit gap-1 border-2 border-primary px-3 py-[0.375rem] text-base uppercase"
        variant="outline"
      >
        <ShoppingCartIcon size={16} />
        Carrinho
      </Badge>

      {/* RENDERIZAR OS PRODUTOS */}
      {products.map((product) => (
        <CartItem
          key={product.id}
          product={computeProductTotalPrice(product as any) as any}
        />
      ))}
    </div>
  );
};

export default Cart;
