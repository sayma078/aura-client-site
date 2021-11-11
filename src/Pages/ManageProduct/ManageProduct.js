import React, {useState, useEffect} from 'react';

const ManageProduct = () => {
    const [manageProducts, setManageProducts] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/products')
        .then(res => res.json())
        .then(data => setManageProducts(data));
    },[manageProducts])
    console.log(manageProducts);
    const handleDelete =(id) => {
        const url = `http://localhost:5000/deleteProducts/${id}`;
        fetch(url, {
            method: "DELETE",
        })
        .then(res=> res.json())
        .then(data => {
            if(data)
            {
                alert("Are you sure to delete??")
            }
        });
    };
    return (
        <div>
            <h2>manage all product</h2>
            {
            manageProducts.map((product) => <div className="d-flex justify-content-center m-1 "><h4>{product?.name}</h4>
            <button  className="btn btn-warning ms-3 " key={product._id} onClick={() => handleDelete(product?._id)}>DELETE</button>
              </div>
            )}
        </div>
    );
};

export default ManageProduct;