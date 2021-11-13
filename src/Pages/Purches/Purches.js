import axios from "axios";
import React from "react";
import { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useHistory, useParams } from "react-router";
import { AuthContext } from "../../Context/AuthProvider";

const Purches = () => {
  const { id } = useParams();
  const [details, setDetails] = useState({});
  const [loginUser, setLoginUser] = useContext(AuthContext);

//   console.log(details);
  useEffect(() => {
    fetch(`https://salty-citadel-46472.herokuapp.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setDetails(data));
  }, []);
  console.log(id);
  const history = useHistory();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const { name, description, cost, img } = details;
    const orderData = {
      name,
      description,
      cost,
      img,
      ...data,
      purchesStatus: "pending",
    };
    console.log(orderData);
    axios.post("https://salty-citadel-46472.herokuapp.com/orders", orderData).then((res) => {
      if (res.data.insertedId) {
        alert(
          `booking successfully. Please review this product. ${history.push("/review")}`
        );
      }
    });
  };
  return ( 
    <div>
    <div className="container">
      <h2 className="my-5">Place Order</h2>

      <div className="row">
        <div className="">
          <h2>Form</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-2">
              <input
                defaultValue={loginUser.email}
                {...register("email", { required: true })}
              />
            </div>
            <div className="mb-2">
              <input
                placeholder="Enter Your Name"
                defaultValue={loginUser.displayName}
                {...register("userName", { required: true })}
              />
            </div>
            <div className="mb-2">
              <input
                placeholder="Address"
                {...register("address", { required: true })}
              />
            </div>
            <div className="mb-2">
              <input
                placeholder="Phone Number"
                type="number"
                {...register("phoneNumber", { required: true })}
              />
            </div>

            {errors.exampleRequired && <span>This field is required</span>}

            <input  type="submit" value="Conform" />
          </form>
        </div>
      </div>
    </div>
  </div>
  );
};

export default Purches;
