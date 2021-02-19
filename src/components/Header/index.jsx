import React from 'react';
import SearchField from '../../features/Search/components/SearchField';
import { ReactComponent as SearchIcon } from '../../images/icons/search.svg';
import './style.scss';

export default function Header() {
  return (
    <>
      <div className="header">
        <div className="header__img"></div>
        <div className="header__content">
          {/* <h2 className="header__title">Groceries Delivered in 90 Minute</h2> */}
          <h2 className="header__title">Dkm chúng mày</h2>
          <p className="header__description">
            Get your healthy foods & snacks delivered at your doorsteps all day everyday
          </p>
          <div className="header__search-box">
            <form action="" className="header__search-form">
              <span className="category">Grocery</span>
              <SearchField />
              <button type="submit" className="btn-search">
                <SearchIcon />
                Search
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="header--mobile">
        <p>Groceries Delivered in 90 Minute</p>
        <form className="navigation__search-form">
          <SearchIcon style={{ margin: '0 16px' }} />
          <SearchField />
        </form>
      </div>
    </>
  );
}
