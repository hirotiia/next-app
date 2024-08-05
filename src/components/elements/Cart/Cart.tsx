'use client';

import { ChangeEvent, useState } from 'react';

type Products = {
  name: string;
  price: number;
  checked: boolean;
};

type CartProductsProps = {
  products: Products[];
};

export const Cart = ({ products }: CartProductsProps) => {
  const [status, changeCheckedStatus] = useState(products);

  const sumPriceHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { checked, value } = e.target;

    if (checked) {
      changeCheckedStatus((prevstatus) =>
        prevstatus.map((product) =>
          product.name === value ? { ...product, checked: true } : { ...product },
        ),
      );
    } else {
      changeCheckedStatus((prevstatus) =>
        prevstatus.map((product) =>
          product.name === value ? { ...product, checked: false } : { ...product },
        ),
      );
    }
  };

  const totalAmount = status
    .filter((product) => product.checked)
    .reduce((sum, product) => (sum += product.price), 0);

  return (
    <div>
      {status.map((product) => (
        <label key={product.name}>
          {product.name}
          <input type="checkbox" name="product" value={product.name} onChange={sumPriceHandler} />
        </label>
      ))}
      <p>
        合計金額:
        {totalAmount}円
      </p>
    </div>
  );
};
