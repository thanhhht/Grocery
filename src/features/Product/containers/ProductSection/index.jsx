import React, { useEffect, useState } from 'react';
import Categories from '../../components/Categories';
import ProductList from '../../components/ProductList';
import categoryApi from '../../../../api/categoryApi';
import productApi from '../../../../api/productApi';
import './style.scss';

export default function ProductSection() {
  const [categories, setCategories] = useState([]);
  const [productList, setProductList] = useState([]);
  useEffect(() => {
    const fetchCategoryList = async () => {
      try {
        const response = await categoryApi.getAll();
        setCategories(response);
      } catch (error) {
        console.log('Failed to fetch category list: ', error);
      }
    };
    const fetchProductList = async () => {
      try {
        const params = {
          _page: 1,
          _limit: 20,
        };
        const response = await productApi.getAll(params);
        setProductList(response);
      } catch (error) {
        console.log('Failed to fetch product list: ', error);
      }
    };
    fetchCategoryList();
    fetchProductList();
  }, []);
  console.log(productList);
  return (
    <main className="main-content">
      <div className="side-bar">
        <Categories categories={categories} />
      </div>
      <div className="content">
        <ProductList productList={productList} />
        <button className="load-more">Load More</button>
      </div>
    </main>
  );
}
