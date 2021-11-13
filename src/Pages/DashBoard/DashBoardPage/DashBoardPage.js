import React ,{useState,useContext, useEffect} from "react";
import { AuthContext } from "../../../Context/AuthProvider";
import AddProduct from "../../AddProduct/AddProduct";
import MakeAdmin from "../../MakeAdmin/MakeAdmin";
import ManageOrder from "../../ManageOrder/ManageOrder";
import ManageProduct from "../../ManageProduct/ManageProduct";
import MyOrder from "../../MyOrder/MyOrder";
import Review from "../../Review/Review";

const DashBoardPage = () => {
  const [admin, setAdmin] = useState([]);
  const [loginUser, setLoginUser] = useContext(AuthContext);

  useEffect(() => {
    fetch("https://salty-citadel-46472.herokuapp.com/admin?email=" + loginUser.email)
      .then((res) => res.json())
      .then((data) => setAdmin(data));
  }, []);
  return (
    <div>
      <ul class="nav nav-tabs" id="myTab" role="tablist">
        {admin[0]?.email && <li class="nav-item" role="presentation">
          <button
            class="nav-link active"
            id="addProduct-tab"
            data-bs-toggle="tab"
            data-bs-target="#addProduct"
            type="button"
            role="tab"
            aria-controls="addProduct"
            aria-selected="true"
          >
           Add Product
          </button>
        </li>}
        { admin[0]?.email && <li class="nav-item" role="presentation">
          <button
            class="nav-link"
            id="manageProducts-tab"
            data-bs-toggle="tab"
            data-bs-target="#manageProducts"
            type="button"
            role="tab"
            aria-controls="manageProducts"
            aria-selected="false"
          >
            Manage Products
          </button>
        </li>}
        {admin[0]?.email && <li class="nav-item" role="presentation">
          <button
            class="nav-link"
            id="manageOrder-tab"
            data-bs-toggle="tab"
            data-bs-target="#manageOrder"
            type="button"
            role="tab"
            aria-controls="manageOrder"
            aria-selected="false"
          >
            Manage Order
          </button>
        </li>}
        <li class="nav-item" role="presentation">
          <button
            class="nav-link"
            id="myOrder-tab"
            data-bs-toggle="tab"
            data-bs-target="#myOrder"
            type="button"
            role="tab"
            aria-controls="myOrder"
            aria-selected="false"
          >
            My Order
          </button>
        </li>
        {admin[0]?.email && <li class="nav-item" role="presentation">
          <button
            class="nav-link"
            id="MakeAdmin-tab"
            data-bs-toggle="tab"
            data-bs-target="#MakeAdmin"
            type="button"
            role="tab"
            aria-controls="MakeAdmin"
            aria-selected="false"
          >
            Make Admin
          </button>
        </li>}
        <li class="nav-item" role="presentation">
          <button
            class="nav-link"
            id="review-tab"
            data-bs-toggle="tab"
            data-bs-target="#review"
            type="button"
            role="tab"
            aria-controls="review"
            aria-selected="false"
          >
            Review
          </button>
        </li>
      </ul>
      <div class="tab-content" id="myTabContent">
        {admin[0]?.email && <div
          class="tab-pane fade show active"
          id="addProduct"
          role="tabpanel"
          aria-labelledby="addProduct-tab"
        >
          <AddProduct></AddProduct>
        </div>}
        {admin[0]?.email && <div
          class="tab-pane fade"
          id="manageProducts"
          role="tabpanel"
          aria-labelledby="manageProducts-tab"
        >
          <ManageProduct></ManageProduct>
        </div>}
        {admin[0]?.email && <div
          class="tab-pane fade"
          id="manageOrder"
          role="tabpanel"
          aria-labelledby="manageOrder-tab"
        >
        <ManageOrder></ManageOrder>
        </div>}
        <div
          class={`tab-pane fade ${admin[0]?.email ?? "show active" }`}
          id="myOrder"
          role="tabpanel"
          aria-labelledby="myOrder-tab"
        >
        <MyOrder></MyOrder>
        </div>
        {admin[0]?.email && <div
          class="tab-pane fade"
          id="MakeAdmin"
          role="tabpanel"
          aria-labelledby="MakeAdmin-tab"
        >
        <MakeAdmin></MakeAdmin>
        </div>}
        <div
          class="tab-pane fade"
          id="review"
          role="tabpanel"
          aria-labelledby="review-tab"
        >
        <Review></Review>
        </div>
      </div>
    </div>
  );
};

export default DashBoardPage;
