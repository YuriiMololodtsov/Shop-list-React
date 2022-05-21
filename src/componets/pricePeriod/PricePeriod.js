import { React, useState } from 'react';

export default function PricePeriod({ arrProduct }) {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [res, setRes] = useState([]);

  function handleClick(start, end) {
    console.log(start, end);
    let arr = [];
    start = Date.parse(start);
    end = Date.parse(end);
    for (let i = start; i < end; i = i + 24 * 60 * 60 * 1000) {
      arr.push(new Date(i).toISOString().substr(0, 10));
    }

    // arr.forEach((element) => {
    //   res = arrProduct.map((prod) => {
    //     element == prod.id && <p>{prod.name}</p>;
    //   });
    // });
    console.log(arr);
    return arr;
  }

  return (
    <div>
      <div>
        <input
          type="date"
          id="start-date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
        ></input>
      </div>
      <div>
        <input
          type="date"
          id="end-date"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
        ></input>
      </div>
      <div>
        <button onClick={() => setRes(handleClick(startDate, endDate))}>
          Показать за период
        </button>
      </div>
      <table>
        <thead>
          <th>Имя</th>
          <th>Категория</th>
          <th>Цена</th>
        </thead>
        <tbody>
          {res.map((item, index) =>
            arrProduct.map((prod, index) => {
              if (item == prod.id) {
                return (
                  <tr key={index}>
                    <td>{prod.name}</td>
                    <td>{prod.category}</td>
                    <td>{prod.price}</td>
                  </tr>
                );
              }
            })
          )}
        </tbody>
      </table>
    </div>
  );
}
