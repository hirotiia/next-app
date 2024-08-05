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

/** カート内の商品のチェックボックスと合計金額を表示するコンポーネント */
export const Cart = ({ products }: CartProductsProps) => {
  const [status, setStatus] = useState(products);

  /** 商品情報のデータをアップデートする関数 */
  const handleCheckboxChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { checked, value } = e.target;

    setStatus((prevStatus) =>
      prevStatus.map((product) => (product.name === value ? { ...product, checked } : product)),
    );
  };

  /** チェックが入った商品の合計金額を合算する関数 */
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
            onChange={handleCheckboxChange}
          />
        </label>
      ))}
      <p>合計金額: {totalAmount}円</p>
    </div>
  );
};
