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

/** チェックがついた果物の価格を合算して合計金額を出力する関数 */
export const Cart = ({ products }: CartProductsProps) => {
  const [status, updateProductStatus] = useState(products);

  /** 商品情報のデータをアップデートする関数 */
  const sumPriceHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { checked, value } = e.target;

    updateProductStatus((prevStatus) =>
      prevStatus.map((product) => (product.name === value ? { ...product, checked } : product)),
    );
  };

  /** チェックが入った商品の合計金額を合算する関数 */
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
