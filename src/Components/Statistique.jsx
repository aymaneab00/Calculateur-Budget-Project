import React, { useState } from 'react'
import { useSelector } from 'react-redux';

export default function Statistique() {
    const depenses = useSelector(state=>state.depenses)
    const totaldepenses= depenses.reduce((sum,e)=>sum+e.montant ,0)
    const [budget,setbudget]=useState('');
    const [bdgajt,setbdjajt]=useState('');
    const ecart = bdgajt-totaldepenses;


    function handlbudget(e){
        setbdjajt(Number(budget));
        e.preventDefault();
        setbudget('');
       
    

    }
  return (
    <div>

    <div className='container'>
        <div className='budget'>
            <h1>BUDGET : {bdgajt} DH</h1>
        </div>
        <div className='depenses'>
            <h1>DEPENSES : {totaldepenses} DH</h1>
        </div>
        <div className='ecart'>
            <h1>ECART : {ecart} DH</h1>
        </div>
    </div>
    <div className='Ajout-budget'>

        <form onSubmit={(e)=>handlbudget(e)}>
            <input type="text" value={budget} onChange={(e)=>setbudget(Number(e.target.value))}/>
            <button>Ajouter Budget</button>
        </form>

    </div>
    </div>
  )
}
