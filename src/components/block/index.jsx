import * as React from 'react';
import { withStyles } from '@material-ui/core/styles';

import styles from './styles';

type PropsType = {
  classes: Object;
};

class Block extends React.PureComponent<PropsType, {}> {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root} />
    );
  }
}

export default withStyles(styles)(Block);
