import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className="  footer ">
        
        <div className=" d-flex justify-content-between container">
            <div>
               <h1>About</h1>
               <p>Help Center</p>
               <p>Address Store</p>
               <p>Privacy Policy</p>
               </div>
               <div>
               <h1>Shop</h1>
               <p>Wholesale Policy</p>
               <p>Term & Condition</p>
               <p>Product Return </p>
               </div>
       <div>
       <h1>Newsletter</h1>
        <p>Subscribe to our mailing list</p>
        <h4><i className="fab fa-facebook-square"></i> <i className="fab fa-twitter-square"></i> <i className="fab fa-instagram-square"></i></h4>
        <small>AncoraThemes © 2021. All Rights Reserved.</small>
       </div>
    </div>
    </div>
    );
};

export default Footer;