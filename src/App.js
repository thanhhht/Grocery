import React, { useEffect } from 'react';
import Header from './components/Header';
import NavigationBar from './components/NavigationBar';
import FilterBar from './features/Filter/container/FilterBar';
import OfferSection from './features/Offer/OfferSection';
import ProductSection from './features/Product/containers/ProductSection';

function App() {
  useEffect(() => {
    const stickyNav = document.querySelector('.sticky-inner-wrapper');
    const categories = document.querySelector('.categories');
    const offsetTopNav = document.querySelector('.offer').offsetTop - 100;
    const offsetTopCat = document.querySelector('.main-content').offsetTop;
    console.log(offsetTopCat, offsetTopNav);
    function toggleSticky(scrollY, offsetTop, ele) {
      ele.classList.toggle('sticky', scrollY >= offsetTop);
    }
    function logit() {
      const scrollY = window.pageYOffset;
      toggleSticky(scrollY, offsetTopCat, categories);
      toggleSticky(scrollY, offsetTopNav, stickyNav);
    }
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
      <FilterBar/>
      <ProductSection />
    </>
  );
}

export default App;
