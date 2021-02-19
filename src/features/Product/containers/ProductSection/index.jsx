import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Categories from '../../components/Categories';
import ProductList from '../../components/ProductList';

import './style.scss';

export default function ProductSection() {
  // const categories = {
  //   data: [
  //     {
  //       id: 'cate01',
  //       name: 'Fruits & Vegetables',
  //       icon: 'apple',
  //       sub: [
  //         {
  //           id: 'catesub101',
  //           name: 'Fruits',
  //         },
  //         {
  //           id: 'catesub102',
  //           name: 'Vegetables',
  //         },
  //       ],
  //     },
  //     {
  //       id: 'cate02',
  //       name: 'Meat & Fish',
  //       icon: 'meat',
  //       sub: [
  //         {
  //           id: 'catesub201',
  //           name: 'Meat',
  //         },
  //         {
  //           id: 'catesub202',
  //           name: 'Fish',
  //         },
  //       ],
  //     },
  //     {
  //       id: 'cate03',
  //       name: 'Snacks',
  //       icon: 'coffee',
  //       sub: [
  //         {
  //           id: 'catesub301',
  //           name: 'Biscuits',
  //         },
  //         {
  //           id: 'catesub302',
  //           name: 'Chocolates',
  //         },
  //         {
  //           id: 'catesub303',
  //           name: 'Crisps',
  //         },
  //         {
  //           id: 'catesub304',
  //           name: 'Noodles',
  //         },
  //         {
  //           id: 'catesub305',
  //           name: 'Nuts',
  //         },
  //         {
  //           id: 'catesub306',
  //           name: 'Pasta',
  //         },
  //         {
  //           id: 'catesub307',
  //           name: 'Sauce',
  //         },
  //         {
  //           id: 'catesub308',
  //           name: 'Soup',
  //         },
  //       ],
  //     },
  //     {
  //       id: 'cate04',
  //       name: 'Pet Care',
  //       icon: 'food',
  //       sub: [
  //         {
  //           id: 'catesub401',
  //           name: 'Cat Food',
  //         },
  //         {
  //           id: 'catesub402',
  //           name: 'Dog Food',
  //         },
  //         {
  //           id: 'catesub403',
  //           name: 'Kitten Food',
  //         },
  //         {
  //           id: 'catesub404',
  //           name: 'Pet Accessories',
  //         },
  //       ],
  //     },
  //     {
  //       id: 'cate05',
  //       name: 'Home & Cleaning',
  //       icon: 'clean',
  //       sub: [
  //         {
  //           id: 'catesub501',
  //           name: 'Air Freshner',
  //         },
  //         {
  //           id: 'catesub502',
  //           name: 'Cleaning Products',
  //         },
  //         {
  //           id: 'catesub503',
  //           name: 'Dishwasher',
  //         },
  //         {
  //           id: 'catesub504',
  //           name: 'Kitchen Accessories',
  //         },
  //         {
  //           id: 'catesub505',
  //           name: 'Laundry',
  //         },
  //         {
  //           id: 'catesub506',
  //           name: 'Pet Control',
  //         },
  //       ],
  //     },
  //     {
  //       id: 'cate06',
  //       name: 'Dairy',
  //       icon: 'bottle',
  //       sub: [
  //         {
  //           id: 'catesub601',
  //           name: 'Butter',
  //         },
  //         {
  //           id: 'catesub602',
  //           name: 'Egg',
  //         },
  //         {
  //           id: 'catesub603',
  //           name: 'Milk',
  //         },
  //         {
  //           id: 'catesub604',
  //           name: 'Milk Cream',
  //         },
  //         {
  //           id: 'catesub605',
  //           name: 'Powder Milk',
  //         },
  //         {
  //           id: 'catesub606',
  //           name: 'Yogourt',
  //         },
  //       ],
  //     },
  //     {
  //       id: 'cate07',
  //       name: 'Cooking',
  //       icon: 'cooker',
  //       sub: [
  //         {
  //           id: 'catesub701',
  //           name: 'Oil',
  //         },
  //         {
  //           id: 'catesub702',
  //           name: 'Rice',
  //         },
  //         {
  //           id: 'catesub703',
  //           name: 'Salt & Sugar',
  //         },
  //         {
  //           id: 'catesub704',
  //           name: 'Spices',
  //         },
  //       ],
  //     },
  //     {
  //       id: 'cate08',
  //       name: 'Breakfast',
  //       icon: 'cake',
  //       sub: [
  //         {
  //           id: 'catesub801',
  //           name: 'Bread',
  //         },
  //         {
  //           id: 'catesub802',
  //           name: 'Cereal',
  //         },
  //         {
  //           id: 'catesub803',
  //           name: 'Honey',
  //         },
  //         {
  //           id: 'catesub804',
  //           name: 'Jam',
  //         },
  //         {
  //           id: 'catesub805',
  //           name: 'Mayonnaise',
  //         },
  //         {
  //           id: 'catesub806',
  //           name: 'Oats',
  //         },
  //       ],
  //     },
  //     {
  //       id: 'cate09',
  //       name: 'Beverage',
  //       icon: 'glass',
  //       sub: [
  //         {
  //           id: 'catesub901',
  //           name: 'Coffee',
  //         },
  //         {
  //           id: 'catesub902',
  //           name: 'Energy Drink',
  //         },
  //         {
  //           id: 'catesub903',
  //           name: 'Juice',
  //         },
  //         {
  //           id: 'catesub904',
  //           name: 'Fizzy Drinks',
  //         },
  //         {
  //           id: 'catesub905',
  //           name: 'Syrup & Powder',
  //         },
  //         {
  //           id: 'catesub906',
  //           name: 'Tea',
  //         },
  //         {
  //           id: 'catesub907',
  //           name: 'Water',
  //         },
  //       ],
  //     },
  //     {
  //       id: 'cate10',
  //       name: 'Beauty & Health',
  //       icon: 'mirror',
  //       sub: [
  //         {
  //           id: 'catesub1001',
  //           name: 'Bath',
  //         },
  //         {
  //           id: 'catesub1002',
  //           name: 'Cream',
  //         },
  //         {
  //           id: 'catesub1003',
  //           name: 'Deodorant',
  //         },
  //         {
  //           id: 'catesub1004',
  //           name: 'Face Care',
  //         },
  //         {
  //           id: 'catesub1005',
  //           name: 'Oral Care',
  //         },
  //         {
  //           id: 'catesub1006',
  //           name: 'Shaving Needs',
  //         },
  //       ],
  //     },
  //   ],
  // };
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:3004/categories')
      .then((res) => {
        setCategories(res.data);
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
