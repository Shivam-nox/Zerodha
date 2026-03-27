import React from 'react';
import Hero from './Hero';
import LeftSection from './LeftSection';
import RightSection from './RightSection';
import Universe from './Universe';

function ProductPage() {
  return (
    <div className="container-fluid overflow-hidden p-0">
      <Hero />
      
      <LeftSection 
        imageURL="media/images/products-kite.png"
        productName="Kite"
        productDescription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
        tryDemo="#!"
        learnMore="#!"
        googlePlay="#!"
        appStore="#!"
      />
      
      <RightSection 
        imageURL="media/images/products-console.png"
        productName="Console"
        productDescription="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."
        learnMore="#!"
      />
      
      <LeftSection 
        imageURL="media/images/products-coin.png"
        productName="Coin"
        productDescription="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
        tryDemo="#!"
        learnMore="#!"
        googlePlay="#!"
        appStore="#!"
      />
      
      <RightSection 
        imageURL="media/images/landing.svg" // Note: You might want to update this image path
        productName="Kite Connect API"
        productDescription="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."
        learnMore="#!"
      />
      
      <LeftSection 
        imageURL="media/images/varsity-products.png"
        productName="Varsity mobile"
        productDescription="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
        learnMore="#!"
        googlePlay="#!"
        appStore="#!"
      />
      
      <div className='container text-center mt-5 mb-5 py-5'>
        <p className='fs-4 text-muted'>
          Want to know more about our technology stack? Check out the 
          <a href='#!' className='text-decoration-none fw-semibold mx-2' style={{ color: "#387ed1" }}>
            Zerodha.tech
          </a> 
          blog.
        </p>
      </div>
      
      <Universe />
    </div>
  );
}

export default ProductPage;