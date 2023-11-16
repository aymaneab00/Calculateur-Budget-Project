import React from "react";
import { useSelector } from "react-redux";

export default function ListeDepenses() {
  const listdepenses = useSelector((state) => state.depenses);
  console.log(listdepenses)
  return (
    <div className="table-list">
         <table border='1'>
        <tr>
            <th>Titre</th>
            <th>Montant</th>
        </tr>
      {listdepenses.map((d,i) => (
      
        <tr key={i} className="rows">
            <td>{d.Titre}</td>
            <td>{d.montant}</td>
        </tr>

))}
</table>
    </div>
  );
}
