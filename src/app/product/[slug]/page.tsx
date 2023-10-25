import { prismaClient } from "@/lib/prisma";
import ProductImage from "./component/product-images";
import ProductInfo from "./component/product-info";
import { computeProductTotalPrice } from "@/helpers/products";

interface ProductDetailsPageProps {
  params: {
    slug: string;
  };
}

const ProductDetailsPage = async ({
  params: { slug },
}: ProductDetailsPageProps) => {
  const product = await prismaClient.product.findFirst({
    where: {
      slug,
    },
  });

  if (!product) return null;

  return (
    <div className="flex flex-col gap-8">
      <ProductImage name={product.name} imageUrls={product.imageUrls} />
      <ProductInfo
        name={product.name}
        discountPercentage={product.discountPercentage}
        basePrice={product.basePrice}
      />
    </div>
  );
};

export default ProductDetailsPage;
