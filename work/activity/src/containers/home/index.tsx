import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../../stores/actions/home';
import './styles';

interface Props {
}

interface Stage {
}

class Home extends React.Component<Props, Stage> {
  constructor(props: Props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {

  }

  render() {
    return (
      <div className="home">
      </div>
    );
  }
}

export default connect<Props>(
  (state: RootState): any => ({
  }),
  dispatch => bindActionCreators(actionCreators, dispatch)
)(Home);

