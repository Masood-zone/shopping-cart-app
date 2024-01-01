import React, { useState } from "react";
import { IoMdHeartEmpty } from "react-icons/io";
import likeIcon from "../../assets/svgs/heart.svg";
import { capitalLetterConverter } from "../../utils/capitalLetterConverter";

function CartCard({ name, color, isFavourite, price, addToCart, id, product }) {
  const [like, setLike] = useState(isFavourite);
  return (
    <div
      className="card card-compact w-full bg-base-100 shadow-xl my-2"
      key={id}
    >
      <figure className="">
        <img
          src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
          alt="Shoes"
          className=""
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{capitalLetterConverter(name)}</h2>
        <p className="font-light text-neutral-500">{color}</p>
        <p className="font-bold text-lg">{price}</p>
        <div className="card-actions justify-between items-center">
          <button className="btn" onClick={() => setLike(!like)}>
            {like ? (
              <img src={likeIcon} className="w-7 h-7" alt="Favourite-icon" />
            ) : (
              <IoMdHeartEmpty fontSize={25} className="" />
            )}
          </button>
          <button
            className="btn btn-primary"
            onClick={() => addToCart(product)}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartCard;
