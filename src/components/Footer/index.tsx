import styles from './Footer.module.scss';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div>
        created by{' '}
        <span className={styles.span}>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/savchukrm/"
          >
            savchukrm
          </a>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
