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
       <p>Be the first who learns about our
great promotions!</p>
        <p>Subscribe to our mailing list</p>
        <p>AncoraThemes © 2021. All Rights Reserved.</p>
       </div>
    </div>
    </div>
    );
};

export default Footer;