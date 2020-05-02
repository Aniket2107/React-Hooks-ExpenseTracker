import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const Addtransaction = () => {
  const [txt, setTxt] = useState("");
  const [amount, setAmount] = useState(0);

  const { addTransction } = useContext(GlobalContext);

  const onSubmit = (e) => {
    e.preventDefault();

    const newTransaction = {
      id: Math.floor(Math.random) * 1000000,
      text: txt,
      amount: +amount,
    };

    addTransction(newTransaction);
  };

  return (
    <>
      <h3>Add new transaction</h3>
      <form>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input
            type="text"
            value={txt}
            onChange={(e) => setTxt(e.target.value)}
            placeholder="Enter text..."
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br />
            (negative - expense, positive - income)
          </label>

          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount..."
          />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </>
  );
};
