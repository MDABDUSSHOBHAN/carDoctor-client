import React from 'react';
import image from '../../assets/images/checkout/checkout.png'
const NavCard = () => {
    return (
        <div>
            <div className="navbar bg-orange-500  text-primary-content">
  <div className="flex-1">
    <a className="btn btn-ghost text-xl text-blue-700 text-center">Checkout Section</a>
  </div>
  <div>
   
  <div className="w-96 rounded-full">
          <img alt="Tailwind CSS Navbar component" src={image} />
        </div>
  </div>
</div>
        </div>
    );
};

export default NavCard;