import { Link } from 'react-router-dom';

import styles from './NotFoundBlock.module.scss';

export const NotFoundBlock: React.FC = () => {
  return (
    <div className={styles.root}>
      <h2>Nothing found</h2>
      <p className={styles.description}>
        Unfortunately this page is missing from our online shop
      </p>
      <Link to="/" className="button-simple">
        <div>Return back</div>
      </Link>
    </div>
  );
};
