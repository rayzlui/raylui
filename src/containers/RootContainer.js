import { connect } from 'react-redux';
import { RootView } from '../views/RootView';

function mapStateToProps(state) {
  return { page: state.page };
}

export const RootContainer = connect(mapStateToProps, null)(RootView);
