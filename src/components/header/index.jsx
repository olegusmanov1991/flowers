import * as React from 'react';
import { withStyles } from '@material-ui/core/styles';

import styles from './styles';

type PropsType = {
  classes: Object;
};

class Header extends React.PureComponent<PropsType, {}> {
  constructor(props: PropsType) {
    super(props);

    this.state = {};
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <div className={classes.card}>
          <div className={classes.city}>г. Новосибирск</div>
          <div className={classes.email}>rassadansk@gmail.com</div>
        </div>
        <div className={classes.card}>
          <div className={classes.company}>Рассада НСК</div>
          <div className={classes.slogan}>Отличные цветники с нашей заботой!</div>
        </div>
        <div className={classes.card}>
          <div className={classes.phone}>+7 952 927 27 20</div>
          <div className={classes.call}>Заказать звонок</div>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(Header);
