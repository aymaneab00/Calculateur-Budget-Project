import React from "react";
import { useSelector } from "react-redux";

export default function ListeDepenses() {
  const listdepenses = useSelector((state) => state.depenses);
  console.log(listdepenses)
  return (
    <div>
         <table>
        <tr>
            <td>Titre</td>
            <td>Montant</td>
        </tr>
      {listdepenses.map((d,i) => (
      
        <tr key={i}>
            <td>{d.Titre}</td>
            <td>{d.montant}</td>
        </tr>

))}
</table>
    </div>
  );
}
