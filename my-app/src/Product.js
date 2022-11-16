import './style.css'
import { useState, useEffect, Fragment } from 'react'

export default function Shop(props) {
  const [products, setProduct] = useState([]);
  const [orders, setOrdes] = useState([]);


  useEffect(() => {
    (async () => {
      const response = await fetch('https://dummyjson.com/products');
      const json = await response.json();
      setProduct(json.products);
    })()

  }, []);
  
  // const handleClick = id => onAddToOrders(id);

  return (
    <Fragment>
      <ul>
        КОРЗИНА
        {orders.map(() =>
          <li
            key={products.title}>
            {products}
          </li>)}

      </ul>
      <div className='container-shop'>

        {/* <table>
        {props.orders.map((order, index) =>
        {<tr key={index}>
          <td>{order.product.title}</td>
        </tr>}
)}
      </table> */}
        <ul className='product-list'>
          {products.map(
            products => <li
              className="opinion-product"
              // onClick={() => AddToOrder(orders)}
              key={products.id}>
              <h1> {products.title}</h1>
              <img src={products.thumbnail} alt={products.id} />
              <p><b>Prise: {products.price} $</b></p>
              <p><b>About a product:</b> {products.description}</p>
              {/* <button className="button-buy">add to basket</button> */}
            </li>
          )}

        </ul>
      </div>
    </Fragment>)
}
