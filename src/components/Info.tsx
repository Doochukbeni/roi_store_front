"use client";

import { Product } from "@/types";
import Currency from "./ui/Currency";
import { Button } from "./ui/Button";
import { ShoppingCart } from "lucide-react";

interface InfoProps {
  data: Product;
}

const Info = ({ data }: InfoProps) => {
  return (
    <div>
      <h1 className="text-3xl font-bold text-slate-900">{data.name} </h1>
      <div className="mt-3 flex items-end justify-between">
        <p className="text-2xl text-slate-900">
          <Currency value={data?.price} />
        </p>
      </div>
      <hr className="my-4 shadow-sm" />
      <div className="flex flex-col gap-y-6">
        <div className="flex items-center gap-x-4">
          <h3 className="font-semibold text-slate-900">Size: </h3>
          <div className="text-slate-500 font-semibold leading-4">
            {data.size.name}
          </div>
        </div>
        <div className="flex items-center gap-x-4">
          <h3 className="font-semibold text-slate-900">Color: </h3>
          <div
            className="h-6 w-6 rounded-full border border-slate-300"
            style={{ backgroundColor: `${data.color.value}` }}
          />
        </div>
      </div>
      <div className="flex mt-10 items-center gap-x-3">
        <Button className="flex items-center gap-x-2">
          Add To Cart
          <ShoppingCart size={20} />
        </Button>
      </div>
    </div>
  );
};

export default Info;
