import React, {useState, useEffect} from 'react';

const ManageProduct = () => {
    const [manageProducts, setManageProducts] = useState([]);
    useEffect(()=>{
        fetch('https://salty-citadel-46472.herokuapp.com/products')
        .then(res => res.json())
        .then(data => setManageProducts(data));
    },[manageProducts])
    // console.log(manageProducts);
    const handleDelete =(id) => {
        const url = `https://salty-citadel-46472.herokuapp.com/deleteProducts/${id}`;
        fetch(url, {
            method: "DELETE",
        })
        .then(res=> res.json())
        .then(data => {
            if(data)
            {
                alert("Are you want to delete??")
            }
        });
    };
    return (
        
        <div className="container">
           <h2>Manage Products</h2>
           <table className="table text-center">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Name</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          {manageProducts.map((product) => (
            <tr>
              <td>{product?._id}</td>
              <td>{product?.name}</td>
              <td><button className="btn btn-warning" onClick={()=>handleDelete(product?._id)}>< i className="far fa-trash-alt"></i></button></td>
            </tr>
          ))} 
          </tbody>
          </table>
        </div>
    );
};

export default ManageProduct;