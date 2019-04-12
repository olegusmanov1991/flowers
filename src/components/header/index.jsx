import * as React from 'react';

import styles from './styles.less';

const Header = () => (
  <div className={styles.root}>
    <div className={styles.card}>
      <div className={styles.city}>г. Новосибирск</div>
      <div className={styles.email}>rassadansk@gmail.com</div>
    </div>
    <div className={styles.card}>
      <div className={styles.company}>Рассада НСК</div>
      <div className={styles.slogan}>Отличные цветники с нашей заботой!</div>
    </div>
    <div className={styles.card}>
      <div className={styles.phone}>+7 952 927 27 20</div>
      <div className={styles.call}>Заказать звонок</div>
    </div>
  </div>
);

export default Header;
