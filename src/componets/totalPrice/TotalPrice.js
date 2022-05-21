import React from 'react';

export default function TotalPrice({ arrProduct }) {
  const result = arrProduct.reduce((n, { price }) => n + Number(price), 0);
  return (
    <div>
      <p>Итого за день: {result}</p>
    </div>
  );
}
