import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { BagSliceActions } from "../../store/BagSlice";

const HomeItem = ({ item }) => {
  const bagList = useSelector((store) => store.bagitem);
  const dispatch = useDispatch();

  return (
    <div className="item-container">
      <img className="item-image" src={item.image} alt="item image" />
      <div className="rating">
        {item.rating.stars} ⭐ | {item.rating.count}
      </div>
      <div className="company-name">{item.company}</div>
      <div className="item-name">{item.item_name}</div>
      <div className="price">
        <span className="current-price">Rs {item.current_price}</span>
        <span className="original-price">Rs {item.original_price}</span>
        <span className="discount">({item.discount_percentage}% OFF)</span>
      </div>

      {/* Conditionally render buttons */}
      {bagList.includes(item) ? (
        <button
          className="btn-add-bag"
          style={{ backgroundColor: "#YourColorCodeHere" }}
          onClick={() => dispatch(BagSliceActions.removeTOBag(item.id))}
        >
          Remove From Bag
        </button>
      ) : (
        <button
          className="btn-add-bag"
          style={{ backgroundColor: "#YourColorCodeHere" }}
          onClick={() => dispatch(BagSliceActions.addToBag(item))}
        >
          Add to Bag
        </button>
      )}
    </div>
  );
};

export default HomeItem;
