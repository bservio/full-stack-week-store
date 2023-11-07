import { CartContext } from "@/providers/cart";
import { useContext } from "react";
import { Badge } from "./badge";
import { ShoppingCartIcon } from "lucide-react";
import CartItem from "./cart-item";
import { computeProductTotalPrice } from "@/helpers/products";
import { Separator } from "./separator";

const Cart = () => {
  const { products, subtotal, total, totalDiscount } = useContext(CartContext);

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
      {products.length > 0 ? (
        products.map((product) => (
          <CartItem
            key={product.id}
            product={computeProductTotalPrice(product as any) as any}
          />
        ))
      ) : (
        <p className="text-xs font-semibold">Não há produtos no carrinho</p>
      )}

      <div className="flex flex-col gap-3">
        <Separator />
        <div className="align-center flex justify-between">
          <p>Subtotal</p>
          <p>R$ {subtotal.toFixed(2)}</p>
        </div>

        <Separator />
        <div className="align-center flex justify-between text-sm font-semibold">
          <p>Total de Descontos</p>
          <p>- R$ {totalDiscount.toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
};

export default Cart;
