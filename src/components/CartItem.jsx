import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeItem, updateQuantity } from "../redux/CartSlice";

function CartItem() {
  const cartItems = useSelector(state => state.cart.cartItems);
  const dispatch = useDispatch();

  // ✅ Tổng tiền toàn cart
  const totalAmount = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div>
      <h2>🛒 Shopping Cart</h2>

      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        cartItems.map(item => (
          <div key={item.id} style={{ border: "1px solid gray", margin: "10px", padding: "10px" }}>
            
            {/* ✅ Thông tin sản phẩm */}
            <img src={item.img} alt={item.name} />
            <h3>{item.name}</h3>
            <p>Price: ${item.price}</p>

            {/* ✅ Tổng tiền từng item */}
            <p>Total: ${item.price * item.quantity}</p>

            {/* ✅ Buttons tăng giảm */}
            <button onClick={() => dispatch(updateQuantity({ id: item.id, amount: 1 }))}>
              +
            </button>

            <span> {item.quantity} </span>

            <button onClick={() => dispatch(updateQuantity({ id: item.id, amount: -1 }))}>
              -
            </button>

            {/* ✅ Delete */}
            <button onClick={() => dispatch(removeItem(item.id))}>
              Delete
            </button>
          </div>
        ))
      )}

      {/* ✅ Tổng tiền */}
      <h3>Total Cart Amount: ${totalAmount}</h3>

      {/* ✅ Buttons */}
      <button onClick={() => alert("Coming Soon")}>
        Checkout
      </button>

      <button onClick={() => alert("Go back to shopping")}>
        Continue Shopping
      </button>
    </div>
  );
}

export default CartItem;
