import React, { useEffect } from 'react';
import Header from './components/Header';
import NavigationBar from './components/NavigationBar';
import OfferSection from './containers/OfferSection';
import FilterBar from './containers/FilterBar';
import ProductSection from './containers/ProductSection';

function App() {
  useEffect(() => {
    const stickyNav = document.querySelector('.sticky-inner-wrapper');
    const categories = document.querySelector('.categories');
    const offsetTopNav = document.querySelector('.offer').offsetTop - 100;
    const offsetTopCat = document.querySelector('.main-content').offsetTop + 150;
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
      <FilterBar />
      <ProductSection />
    </>
  );
}

export default App;
