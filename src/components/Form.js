import { useState } from "react";

export function Form({ onAddItems, setModalIsOpen }) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();

    if (!description) return;

    const newItem = { description, quantity, packed: false, id: Date.now() };

    onAddItems(newItem);

    setDescription("");
    setQuantity(1);
    setModalIsOpen(false);
  }

  return (
    <div className="form-wrapper">
      <h3 className="form-heading">What do you need for your trip?</h3>
      <form className="form-add-item" onSubmit={handleSubmit}>
        <label htmlFor="num-items">How many?</label>
        <input
          type="text"
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
          id="num-items"
          placeholder="how many items"
        />
        {/* <select
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
        >
          {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
            <option value={num} key={num}>
              {num}
            </option>
          ))}
        </select> */}
        <label htmlFor="item-name">Of what?</label>

        <input
          type="text"
          placeholder="Item name..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          id="item-name"
        />
        <button type="submit" className="btn-add-item">
          +
        </button>
      </form>
    </div>
  );
}
