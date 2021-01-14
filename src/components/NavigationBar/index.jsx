import React from 'react';
import './style.scss';

export default function NavigationBar() {
  return (
    <div className="sticky-outer-wrapper">
      <div className="sticky-inner-wrapper">
        <div className="navigation--mobile"></div>
        <div className="navigation">
          <div className="navigation__left">
            <span>aaa</span>
          </div>
          <div className="navigation__right">
            <span>sss</span>
            <span>vvv</span>
          </div>
        </div>
      </div>
    </div>
  );
}
