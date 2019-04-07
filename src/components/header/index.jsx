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
        <img className={classes.phone} src="/img/phone.png" alt="phone" />
        <span>8-913-922-45-45</span>
      </div>
    );
  }
}

export default withStyles(styles)(Header);
