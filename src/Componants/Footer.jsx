import React from 'react';
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaCcVisa,
  FaCcMastercard,
  FaCcPaypal,
  FaCcAmazonPay,
  FaApple,
  FaGooglePlay,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-700 pt-12 pb-6 px-4 md:px-12 mt-25">
      {/* Top Section */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 text-sm">
        {/* Categories Left */}
        <div>
          <h4 className="font-semibold mb-2">Categories</h4>
          <ul className="space-y-1">
            <li>Vegetables & Fruits</li>
            <li>Breakfast & instant food</li>
            <li>Bakery & Biscuits</li>
            <li>Atta, rice & dal</li>
            <li>Sauces & spreads</li>
            <li>Organic & gourmet</li>
            <li>Baby care</li>
            <li>Cleaning essentials</li>
            <li>Personal care</li>
          </ul>
        </div>

        {/* Categories Right */}
        <div>
          <ul className="mt-7 sm:mt-9 space-y-1">
            <li>Dairy, bread & eggs</li>
            <li>Cold drinks & juices</li>
            <li>Tea, coffee & drinks</li>
            <li>Masala, oil & more</li>
            <li>Chicken, meat & fish</li>
            <li>Paan corner</li>
            <li>Pharma & wellness</li>
            <li>Home & office</li>
            <li>Pet care</li>
          </ul>
        </div>

        {/* Get to know us */}
        <div>
          <h4 className="font-semibold mb-2">Get to know us</h4>
          <ul className="space-y-1">
            <li>Company</li>
            <li>About</li>
            <li>Blog</li>
            <li>Help Center</li>
            <li>Our Value</li>
          </ul>
        </div>

        {/* For Consumers */}
        <div>
          <h4 className="font-semibold mb-2">For Consumers</h4>
          <ul className="space-y-1">
            <li>Payments</li>
            <li>Shipping</li>
            <li>Product Returns</li>
            <li>FAQ</li>
            <li>Shop Checkout</li>
          </ul>
        </div>

        {/* Become a Shopper */}
        <div>
          <h4 className="font-semibold mb-2">Become a Shopper</h4>
          <ul className="space-y-1">
            <li>Shopper Opportunities</li>
            <li>Become a Shopper</li>
            <li>Earnings</li>
            <li>Ideas & Guides</li>
            <li>New Retailers</li>
          </ul>
        </div>

        {/* Freshcart programs */}
        <div>
          <h4 className="font-semibold mb-2">Freshcart programs</h4>
          <ul className="space-y-1">
            <li>Freshcart programs</li>
            <li>Gift Cards</li>
            <li>Promos & Coupons</li>
            <li>Freshcart Ads</li>
            <li>Careers</li>
          </ul>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-300 my-6"></div>

      {/* Bottom Section */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-sm">
        {/* Payment Partners */}
        <div>
          <p className="font-semibold">Payment Partners</p>
          <div className="flex items-center gap-3 mt-2 text-2xl">
            <FaCcAmazonPay />
            <FaCcVisa />
            <FaCcMastercard />
            <FaCcPaypal />
          </div>
        </div>

        {/* Delivery Apps */}
        <div className="text-center">
          <p className="font-semibold mb-2">Get deliveries with FreshCart</p>
          <div className="flex gap-2 justify-center">
            <button className="bg-black text-white px-3 py-2 rounded flex items-center gap-2">
              <FaApple /> <span className="text-sm">App Store</span>
            </button>
            <button className="bg-black text-white px-3 py-2 rounded flex items-center gap-2">
              <FaGooglePlay /> <span className="text-sm">Google Play</span>
            </button>
          </div>
        </div>

        {/* Social Media */}
        <div className="text-center">
          <p className="mb-2">Follow us on</p>
          <div className="flex gap-3 justify-center text-xl">
            <FaFacebookF />
            <FaTwitter />
            <FaInstagram />
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-xs mt-6 text-gray-500">
        © 2022 - 2025 FreshCart eCommerce HTML Template. All rights reserved. Powered by{' '}
        <span className="text-green-600 font-semibold">Codescandy</span>.
      </div>
    </footer>
  );
};

export default Footer;
