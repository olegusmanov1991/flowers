import * as React from 'react';

import styles from './styles.less';
import Header from '../header';
import Block1 from '../block1';

export default () => (
  <div className={styles.root}>
    <Header />
    <Block1 />
  </div>
);
