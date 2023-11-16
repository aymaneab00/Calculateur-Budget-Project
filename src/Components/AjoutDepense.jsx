import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

export default function AjoutDepense() {
    const [titre,settitre]=useState('');
    const [depense,setdepense]=useState('');

 const dispatch = useDispatch();
 function handleajt(e){
e.preventDefault();
dispatch({type:"add-depense",payload1:titre,payload2:depense})
settitre('');
setdepense('');
 }
  return (
    <div className='ajouter-depense'>
<form onSubmit={(e)=>handleajt(e)}>

<input type="text" placeholder='Titre de depense' value={titre} onChange={(e)=>settitre(e.target.value)} />
<input type="text"  placeholder='Montant de la depense ' value={depense} onChange={e=>setdepense(Number(e.target.value))} />
<button>Ajouter depense </button>
</form>
    </div>
  )
}
