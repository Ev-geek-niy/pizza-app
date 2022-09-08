import styles from './NotFoundBlock.module.scss';
import { Link } from 'react-router-dom';

const NotFoundBlock = () => {
  return (
    <div className={styles.root}>
      <h1>
        😕
        <br />
        Страницы не существует
      </h1>
      <p>К сожалению, данной страницы не существует на нашем сайте. Пожалуйста вернитесь назад.</p>
      <Link to="/" className="button button--black">
        <span>Вернуться назад</span>
      </Link>
    </div>
  );
};

export default NotFoundBlock;
