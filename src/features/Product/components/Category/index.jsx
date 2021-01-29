import React, {useState} from 'react';
import PropTypes from 'prop-types';
import { ReactComponent as ArrowRightIcon } from '../../../../images/icons/arrow-right.svg';
import { ReactComponent as AppleIcon } from '../../../../images/icons/apple.svg';
import { ReactComponent as MeatIcon } from '../../../../images/icons/meat.svg';
import { ReactComponent as CoffeeIcon } from '../../../../images/icons/coffee.svg';
import { ReactComponent as FoodIcon } from '../../../../images/icons/food.svg';
import { ReactComponent as CleanIcon } from '../../../../images/icons/clean.svg';
import { ReactComponent as BottleIcon } from '../../../../images/icons/bottle.svg';
import { ReactComponent as CookerIcon } from '../../../../images/icons/cooker.svg';
import { ReactComponent as CakeIcon } from '../../../../images/icons/cake.svg';
import { ReactComponent as GlassIcon } from '../../../../images/icons/glass.svg';
import { ReactComponent as MirrorIcon } from '../../../../images/icons/mirror.svg';

import './style.scss';

export default function Category(props) {
  const { name, icon, sub } = props;
  const [isShowSub, setIsShowSub] = useState(false);
  function renderIcon(icon) {
    switch (icon) {
      case 'apple':
        return <AppleIcon />;
      case 'meat':
        return <MeatIcon />;
      case 'coffee':
        return <CoffeeIcon />;
      case 'food':
        return <FoodIcon />;
      case 'clean':
        return <CleanIcon />;
      case 'bottle':
        return <BottleIcon />;
      case 'cooker':
        return <CookerIcon />;
      case 'cake':
        return <CakeIcon />;
      case 'glass':
        return <GlassIcon />;
      case 'mirror':
        return <MirrorIcon />;
      default:
        return <AppleIcon />;
    }
  };
  function toggleSubMenu() {
    setIsShowSub(!isShowSub);
  }
  return (
    <div className={isShowSub ? "category show-sub" : "category"}>
      <div className="category__content">
        <div className="category__icon">{renderIcon(icon)}</div>
        <span className="category__name">{name}</span>
        <button className="expand" onClick={() => toggleSubMenu()}>
          <ArrowRightIcon /> 
        </button>
      </div>
      <div className="category__sub">
        <div>
          {sub &&
            sub.map((subCate) => (
              <div className="category__sub-content" key={subCate.id}>
                <span className="category__sub-name">{subCate.name}</span>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

Category.propTypes = {
  name: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  sub: PropTypes.array,
};
