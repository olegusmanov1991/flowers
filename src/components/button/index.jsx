import * as React from 'react';
import { withStyles } from '@material-ui/core/styles';

import styles from './styles';

type PropsType = {
  classes: Object;
};


class Button extends React.PureComponent<PropsType, {}> {
  render() {
    const { classes, msg } = this.props;

    return (
      <div className={classes.root}>{props.msg}</div>
    );
  }
}

export default withStyles(styles)(Button);
