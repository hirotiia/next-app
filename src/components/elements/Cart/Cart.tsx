'use client';

import { ChangeEvent, useState } from 'react';

type Product = {
  name: string;
  price: number;
  checked: boolean;
};

type CartProductsProps = {
  products: Product[];
};

export const Cart = ({ products }: CartProductsProps) => {
  const [status, changeCheckedStatus] = useState(products);

  const sumPriceHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { checked, value } = e.target;

    if (checked) {
      changeCheckedStatus((prevstatus) =>
        prevstatus.map((product) => (product.name === value ? { ...product, checked } : product)),
      );
    }
  };

  const totalAmount = status
    .filter((product) => product.checked)
    .reduce((sum, product) => sum + product.price, 0);

  return (
    <div>
      {status.map((product) => (
        <label key={product.name}>
          {product.name}
          <input
            type="checkbox"
            name="product"
            value={product.name}
            checked={product.checked}
            onChange={sumPriceHandler}
          />
        </label>
      ))}
      <p>
        合計金額:
        {totalAmount}円
      </p>
    </div>
  );
};
