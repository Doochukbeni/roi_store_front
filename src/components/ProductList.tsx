import { Product } from "@/types";

import NoResult from "@/components/ui/NoResult";
import ProductCard from "@/components/ui/ProductCard";

interface ProductListProps {
  title: string;
  items: Product[];
}

const ProductList = ({ title, items }: ProductListProps) => {
  return (
    <div className="space-y-4">
      <h3 className="font-bold text-3xl text-slate-900">{title}</h3>
      {items.length === 0 && <NoResult />}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {items.map((item) => (
          <ProductCard key={item.id} data={item} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;