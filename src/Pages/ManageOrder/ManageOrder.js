import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import ManageOrderStatus from './ManageOrderStatus';

const ManageOrder = () => {
    const [manageOrder, setManageOrder] =useState([]);
    // console.log(manageOrder);
    useEffect(() =>{
        fetch('http://localhost:5000/orders')
        .then(res => res.json())
        .then(data => setManageOrder(data));
    },[manageOrder]);
    // console.log(manageOrder);
    const handleDeleteOrder = (id) => {
        // console.log(id);
        fetch(`http://localhost:5000/deletePerches/${id}`,{
            method:"DELETE",
        })
        .then(res => res.json())
        .then(data => {
          if(data)
          { alert('Are you sure to delete??')}
        })
    }
    return (
        <div className="container">
        <h2>Manage Order</h2>
        <table className="table">
     <thead>
       <tr>
         <th scope="col">Name</th>
         <th scope="col">Phone</th>
         <th scope="col">Status</th>
         <th scope="col">Delete</th>
       </tr>
     </thead>
     <tbody>
       {manageOrder.map((purches) => (
         <tr>
           <td>{purches?.userName}</td>
           <td>{purches?.phoneNumber}</td>
           <td><ManageOrderStatus status={purches?.purchesStatus} purchesId={purches?._id}></ManageOrderStatus></td>
           <td><button className="btn btn-warning" onClick={()=>handleDeleteOrder(purches?._id)}>Delete</button></td>
         </tr>
       ))} 
       </tbody>
       </table>
     </div>
    );
};

export default ManageOrder;