import React from 'react';
import './App.css';

const App = () => {
  const products = [
    {
      productName: "Laptop 10",
      price: 7145,
      rating: 2.74,
      discount: 15,
      availability: "yes"
    },
    {
      productName: "AFFORDMED®",
      price: 4101,
      rating: 2.67,
      discount: 37,
      availability: "out-of-stock"
    }
  ];

  const companyInfo = {
    name: "Afford Medical Technologies Private Limited",
    address: "8, 230, 2nd Main Road, Sainikpuri, Hyderabad-500094, Telangana, INDIA PH",
    website: "www.affordmed.com",
    email: "contact@affordmed.com",
    cin: "U72200TG"
  };

  return (
    <div className="container">
      {products.map((product, index) => (
        <div key={index} className="product-container">
          <div className="product-info">
            <h2 className="product-name">{product.productName}</h2>
            <p className="product-price">₹ {product.price}</p>
            <p className="product-rating">Rating: {product.rating}</p>
            <p className="product-discount">Discount: {product.discount}%</p>
            <p className="product-availability">Availability: {product.availability}</p>
          </div>
          {index === 0 && (
            <div className="company-info">
              <p>{companyInfo.name}</p>
              <p>{companyInfo.address}</p>
              <p>Web: <a href={`http://${companyInfo.website}`}>{companyInfo.website}</a>, E-mail: <a href={`mailto:${companyInfo.email}`}>{companyInfo.email}</a></p>
              <p>CIN: {companyInfo.cin}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default App;




