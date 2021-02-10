import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import NavigationBar from './components/NavigationBar';
import OfferSection from './features/Offer/OfferSection';
import ProductSection from './features/Product/containers/ProductSection';

function App() {
  const [scrollY, setScrollY] = useState(0);
  function logit() {
    setScrollY(window.pageYOffset);
    console.log(scrollY);
  }
  useEffect(() => {
    const top = document.querySelector('.offer').offsetTop;
    console.log(top);
    function watchScroll() {
      window.addEventListener('scroll', logit);
    }
    watchScroll();
    return () => {
      window.removeEventListener('scroll', logit);
    };
  });
  return (
    <>
      <NavigationBar />
      <Header />
      <OfferSection />
      <ProductSection />
    </>
  );
}

export default App;
