import React from 'react';
import Category from '../Category';
import PropTypes from 'prop-types';

import './style.scss';

export default function Categories(props) {
  const { categories } = props;

  return (
    <div className="categories">
      <div className="categories__inner">
        {categories.map((category) => (
          <Category
            key={category.id}
            name={category.name}
            icon={category.icon}
            sub={category.sub ? category.sub : null}
          />
        ))}
      </div>
    </div>
  );
}

Categories.propTypes = {
  categories: PropTypes.array,
};
