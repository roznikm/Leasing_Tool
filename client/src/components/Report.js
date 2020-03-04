import React, { useContext } from 'react';
import '../App.css';
import { GlobalContext } from '../context/GlobalState'

const Report = () => {
    const { leases, selected_id} = useContext(GlobalContext); 
    console.log(leases, selected_id); 
    return (
        <div>
            <h1>Hello</h1>
        </div>
    )
}


export default Report;
