import * as React from 'react';
import { withStyles } from '@material-ui/core/styles';

import styles from './styles';

type PropsType = {
  classes: Object;
};

class Body extends React.PureComponent<PropsType, {}> {
  constructor(props: PropsType) {
    super(props);

    this.state = {};
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.background} />
    );
  }
}

export default withStyles(styles)(Body);
