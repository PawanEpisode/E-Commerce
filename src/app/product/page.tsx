import Container from "@/components/Container";
import { getSingleProduct, getTrendingProducts } from "@/helpers"
import { Products } from "../../../type";
import ProductsData from "@/components/ProductsData";
import SingleProduct from "@/components/SingleProduct";

type Props = {
    searchParams: { [key: string]: string | string[] | undefined}
}

const ProductPage = async ({ searchParams}: Props) => {
    const product = getSingleProduct(Number(searchParams?._id));
    const trendingProducts = await getTrendingProducts();
  return (
    <div>
        <Container>
            <SingleProduct product={product}/>
            <div>
                <p className="text-xl text-red-600 py-1 font-semibold">Trending Products</p>
                <div className="grid grid-cols-1 md:grid-cols-2 
                xl:grid-cols-4 gap-4">
                    {trendingProducts?.map((item: Products) => (
                        <ProductsData key={item._id} product={item} />
                    ))}
                </div>
            </div>
        </Container>
    </div>
  )
}

export default ProductPage