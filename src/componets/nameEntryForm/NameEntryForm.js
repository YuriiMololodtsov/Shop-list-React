import { React, useState } from 'react';
import PricePeriod from '../pricePeriod/PricePeriod';
import TableProducts from '../tableProducts/TableProducts';
import TotalPrice from '../totalPrice/TotalPrice';

export default function NameEntryForm() {
  let date = new Date();
  let month = date.getMonth() < 13 ? date.getMonth() + 1 : 0;
  let monthFormat = String(month).length < 2 && '0' + String(month);
  let now = `${date.getFullYear()}-${monthFormat}-${date.getDate()}`;

  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [price, setPrice] = useState('');
  const [arrCategory, setArrCategory] = useState(['мебель', 'одежда']);
  const [list, setList] = useState([
    { id: now, name: 'кровать', category: 'мебель', price: 1000 },
    { id: '2022-04-25', name: 'шкаф', category: 'мебель', price: 100 },
    { id: '2022-04-23', name: 'стул', category: 'мебель', price: 50 },
    { id: '2022-04-25', name: 'пуховик', category: 'одежда', price: 500 },
    { id: '2022-03-14', name: 'шапка', category: 'одежда', price: 37 },
  ]);
  const [value, setValue] = useState('');

  console.log(now);

  const handleSubmit = (e) => {
    //проверка на наличие категории в массиве селект
    arrCategory.indexOf(category) === -1 &&
      setArrCategory([...arrCategory, category]);

    //создаем обьект из инпутов и записываем в стейт///
    const newItem = {
      id: now,
      name: name,
      category: category,
      price: price,
    };
    e.preventDefault();

    setList([...list, newItem]);

    console.log(category);
    setName('');
    setCategory('');
    setPrice('');
  };
  console.log(list);
  console.log(arrCategory);

  //Select
  const options = arrCategory.map((name, index) => {
    return <option key={index}>{name}</option>;
  });

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        ></input>
        <input
          type="text"
          value={category}
          onChange={(e) => {
            setCategory(e.target.value);
          }}
        ></input>
        <input
          type="text"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        ></input>
        <button type="submit">ADD</button>
      </form>
      <span>Категория: </span>
      <select
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
          setCategory(value);
        }}
      >
        {options}
      </select>
      <TableProducts date={now} arrProduct={list}></TableProducts>
      <TotalPrice arrProduct={list}></TotalPrice>
      <PricePeriod arrProduct={list}></PricePeriod>
    </div>
  );
}
