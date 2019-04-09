import * as React from 'react';
import { withStyles } from '@material-ui/core/styles';

import styles from './styles';
import Header from '../header';

type PropsType = {};

class Body extends React.PureComponent<PropsType, {}> {
  constructor(props: PropsType) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <Header/>
    );
  }
}

export default withStyles(styles)(Body);
