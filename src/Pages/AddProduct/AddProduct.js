import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import './AddProduct.css';
const AddProduct = () => {
    const { register, handleSubmit, reset } = useForm();
  const onSubmit = data => {
      console.log(data);

      axios.post('https://salty-citadel-46472.herokuapp.com/products',data)
      .then(res=>{
          if(res.data.insertedId){
            alert('Added Successfully')
            reset();
          }
      })
    }
    return (
        <div className="add-product">
        <h2>Please add a Product</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input {...register("name", { required: true, maxLength: 20 })} placeholder="Name"/>
          <textarea {...register("description")} placeholder="Description" />
          <input type="number" {...register("cost")} placeholder="cost"/>
          <input {...register("img")}placeholder="Image url" />
          <input type="submit" />
        </form>
      </div>
    );
};

export default AddProduct;