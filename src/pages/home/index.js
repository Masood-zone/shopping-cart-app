import React, { useContext } from "react";
import CartCard from "../../components/CartCard/CartCard";
import { CartContext } from "../../contexts/CartContext";

function Home() {
  const { cart, onAddToCart, products } = useContext(CartContext);
  console.log(cart);
  return (
    <div className="m-10">
      <main className="grid grid-cols-1 lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {products.map((product) => {
          return (
            <CartCard
              name={product.product_name}
              price={product.price}
              isFavourite={product.isFavourite}
              color={product.color}
              id={product.id}
              key={product.id}
              addToCart={onAddToCart}
              product={product}
            />
          );
        })}
      </main>
    </div>
  );
}

export default Home;
