import { useState, useEffect } from 'react';

export default function Orders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/orders')
      .then((res) => res.json())
      .then(setOrders);
  }, []);

  return (
    <ul>
      {orders.map((order) => (
        <li>{order.description}</li>
      ))}
    </ul>
  );
}
