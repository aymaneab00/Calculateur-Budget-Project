const initial_state = {
  depenses: [
    // {
    //   Titre: "Voiture",
    //   montant: 40000,
    // },
    // {
    //   Titre: "VentePc",
    //   montant: 50000,
    // },
    // {
    //   Titre: "Achat cartable",
    //   montant: 4500,
    // },
  ],
};
const BudgetReducer = (state = initial_state, action) => {
  let newstate = { ...state };
  switch (action.type) {
    case "add-depense":
newstate.depenses= [...newstate.depenses,{
    Titre:action.payload1,
    montant: action.payload2

}]
    break;
  }
  return newstate;
};
export default BudgetReducer;
