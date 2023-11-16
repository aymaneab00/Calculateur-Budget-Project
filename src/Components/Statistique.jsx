import React, { useState } from "react";
import { useSelector } from "react-redux";
import { FaMoneyBill } from "react-icons/fa";

export default function Statistique() {
  const depenses = useSelector((state) => state.depenses);
  const totaldepenses = depenses.reduce((sum, e) => sum + e.montant, 0);
  const [budget, setbudget] = useState("");
  const [bdgajt, setbdjajt] = useState("");
  const ecart = bdgajt - totaldepenses;

  function handlbudget(e) {
    setbdjajt(Number(budget));
    e.preventDefault();
    setbudget("");
  }
  return (
    <div>
      <div className="container-stats">
        <div className="budget">
          <FaMoneyBill className="money" />
          <h1>BUDGET : {bdgajt} DH</h1>
        </div>
        <div className="depenses">
          <FaMoneyBill className="money" />
          <h1>DEPENSES : {totaldepenses} DH</h1>
        </div>
        <div className="ecart">
          <FaMoneyBill className="money" />
          <h1>ECART : {bdgajt && totaldepenses ? ecart : null} DH</h1>
        </div>
      </div>
      <div>
        <form className="Ajout-budget" onSubmit={(e) => handlbudget(e)}>
          <input
            type="text"
            value={budget}
            placeholder="Donner votre budget"
            onChange={(e) => setbudget(Number(e.target.value))}
          />
          <button>Ajouter Budget</button>
        </form>
      </div>
    </div>
  );
}
