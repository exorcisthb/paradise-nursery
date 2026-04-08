import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../redux/CartSlice";

const plantsData = {
  Indoor: [
    { id: 1, name: "Snake Plant", price: 10, img: "https://via.placeholder.com/100" },
    { id: 2, name: "Peace Lily", price: 12, img: "https://via.placeholder.com/100" },
    { id: 3, name: "Aloe Vera", price: 8, img: "https://via.placeholder.com/100" },
    { id: 4, name: "Spider Plant", price: 9, img: "https://via.placeholder.com/100" },
    { id: 5, name: "ZZ Plant", price: 15, img: "https://via.placeholder.com/100" },
    { id: 6, name: "Fern", price: 11, img: "https://via.placeholder.com/100" }
  ],
  Outdoor: [
    { id: 7, name: "Rose", price: 14, img: "https://via.placeholder.com/100" },
    { id: 8, name: "Lavender", price: 13, img: "https://via.placeholder.com/100" },
    { id: 9, name: "Sunflower", price: 10, img: "https://via.placeholder.com/100" },
    { id: 10, name: "Tulip", price: 9, img: "https://via.placeholder.com/100" },
    { id: 11, name: "Daisy", price: 8, img: "https://via.placeholder.com/100" },
    { id: 12, name: "Orchid", price: 16, img: "https://via.placeholder.com/100" }
  ],
  Succulents: [
    { id: 13, name: "Cactus", price: 6, img: "https://via.placeholder.com/100" },
    { id: 14, name: "Echeveria", price: 7, img: "https://via.placeholder.com/100" },
    { id: 15, name: "Haworthia", price: 8, img: "https://via.placeholder.com/100" },
    { id: 16, name: "Jade Plant", price: 9, img: "https://via.placeholder.com/100" },
    { id: 17, name: "Agave", price: 11, img: "https://via.placeholder.com/100" },
    { id: 18, name: "Sedum", price: 7, img: "https://via.placeholder.com/100" }
  ]
};

function ProductList() {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.cartItems);

  const [addedItems, setAddedItems] = useState([]);

  const handleAdd = (plant) => {
    dispatch(addItem(plant));
    setAddedItems([...addedItems, plant.id]);
  };

  return (
    <div>
      {/* ✅ Navbar */}
      <nav>
        <h2>🌿 Paradise Nursery</h2>
        <div>
          <span>Home</span> | <span>Plants</span> | <span>Cart 🛒 ({cartItems.length})</span>
        </div>
      </nav>

      {/* ✅ Product List */}
      {Object.entries(plantsData).map(([category, plants]) => (
        <div key={category}>
          <h3>{category}</h3>

          <div style={{ display: "flex", gap: "20px" }}>
            {plants.map((plant) => (
              <div key={plant.id} style={{ border: "1px solid gray", padding: "10px" }}>
                <img src={plant.img} alt={plant.name} />
                <h4>{plant.name}</h4>
                <p>${plant.price}</p>

                <button
                  onClick={() => handleAdd(plant)}
                  disabled={addedItems.includes(plant.id)}
                >
                  {addedItems.includes(plant.id) ? "Added" : "Add to Cart"}
                </button>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
