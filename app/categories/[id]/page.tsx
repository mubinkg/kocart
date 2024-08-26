import ProductCard from "@/components/ProductCard";
import { categoryProduct } from "@/constants/products";

export default function Page({ props }: any) {
    return (
        <div className="w-full">
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-5 my-4 mx-12">
                {categoryProduct.map((item, idx) => (
                    <ProductCard key={idx} product={item} />
                ))}
            </div>
        </div>
    )
}