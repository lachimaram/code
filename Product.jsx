import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div>
      <h1>Products</h1>

      {products.map((product) => (
        <div key={product.id}>
          <img src={product.image} width="100" />
          <h3>{product.title}</h3>
          <p>${product.price}</p>

          <Link to={`/product/${product.id}`}>
            View Details
          </Link>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
