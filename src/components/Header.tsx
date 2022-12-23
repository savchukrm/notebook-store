import { Link, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectCart } from '../redux/cart/selectors';
import { useEffect, useRef } from 'react';
import { calcTotalPrice } from '../utils/calcTotalPrice';

const Header: React.FC = () => {
  const { items } = useSelector(selectCart);
  const location = useLocation();
  const isMounted = useRef(false);

  const totalPrice = calcTotalPrice(items);

  const totalCount = items.reduce(
    (sum: number, item: { count: number }) => sum + item.count,
    0
  );

  useEffect(() => {
    if (isMounted.current) {
      const json = JSON.stringify(items);
      localStorage.setItem('cart', json);
    }
    isMounted.current = true;
  }, [items]);

  return (
    <div className="header">
      <div className="container">
        <Link to="/">
          <div>
            <h1>handwriting</h1>
          </div>
        </Link>
        {location.pathname !== '/cart' && (
          <div className="header__cart">
            <Link to="/cart">
              <div className="button button--cart">
                <span>{totalPrice} $</span>
                <div className="button__delimiter"></div>
                <img src="cart__icon.png" alt="cartIcon" />
                <span>{totalCount}</span>
              </div>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
