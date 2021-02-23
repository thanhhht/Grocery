import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Categories from '../../components/Categories';
import ProductList from '../../components/ProductList';

import './style.scss';

export default function ProductSection() {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    axios
      .get('/api/categories')
      .then((res) => {
        setCategories(res.data.categories);
      })
      .catch((error) => {
        console.error(error);
      });

    axios
      .get('/api/products')
      .then((res) => {
        console.log(res.data.products);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  return (
    <main className="main-content">
      <div className="side-bar">
        <Categories categories={categories} />
      </div>
      <div className="content">
        <ProductList />
        <button className="load-more">Load More</button>
      </div>
    </main>
  );
}
