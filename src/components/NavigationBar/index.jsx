import React from 'react';
import './style.scss';
import logo from '../../images/logo.svg';
import { ReactComponent as QuestionIcon } from '../../images/icons/question-circle.svg';
import { ReactComponent as SearchIcon } from '../../images/icons/search.svg';
import SearchField from '../../features/Search/components/SearchField';

export default function NavigationBar() {
  return (
    <div className="sticky-outer-wrapper">
      <div className="sticky-inner-wrapper">
        <div className="navigation--mobile">
          <div className="burger">burger</div>
          <div className="logo">
            <img src={logo} alt="" />
          </div>
          <button className="search"></button>
        </div>
        <div className="navigation">
          <div className="navigation__left">
            <div className="logo">
              <img src={logo} alt="" />
            </div>
          </div>
          <form className="navigation__search-form">
            <SearchIcon style={{ margin: '0 16px' }} />
            <SearchField />
          </form>
          <div className="navigation__right">
            <a className="navigation__item" href="/dmm">
              <span>Offer</span>
            </a>
            <a className="navigation__item" href="/dmm">
              <span className="navigation__icon">
                <QuestionIcon />
              </span>
              <span>Need Help</span>
            </a>
            <button className="btn-register">Register</button>
            <button className="btn-login">Login</button>
          </div>
        </div>
      </div>
    </div>
  );
}
