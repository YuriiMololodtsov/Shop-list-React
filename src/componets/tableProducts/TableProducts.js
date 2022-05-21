import React from 'react';

export default function TableProducts({ date, arrProduct }) {
  const rows = arrProduct.map(function (item, index) {
    if (item.id == date) {
      return (
        <tr key={index}>
          <td>{item.name}</td>
          <td>{item.category}</td>
          <td>{item.price}</td>
        </tr>
      );
    }
  });
  return (
    <>
      <table>
        <thead>
          <th>Имя</th>
          <th>Категория</th>
          <th>Цена</th>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    </>
  );
}
