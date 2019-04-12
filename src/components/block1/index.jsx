import * as React from 'react';

import styles from './styles.less';

export default () => (
  <div className={styles.background}>
    <div className={styles.dark} />
    <div className={styles.blockContent}>
      <div className={styles.layer}>
        <div className={styles.title}>Розничная поставка растений и удобрений</div>
        <div className={styles.subTitle}>
          Мы предлагаем своим клиентам собсственновыращенные цветы и овощи
        </div>
        <div className={styles.more}>Подробнее</div>
        <div className={styles.description}>
          Оставьте заявку на сайте или позвоните по тел. 8...
        </div>
      </div>
    </div>
  </div>
);
