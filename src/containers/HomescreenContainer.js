import { connect } from 'react-redux';
import { changeHomescreen } from '../actions/actions';
import { HomescreenView } from '../views/HomescreenView';
import { MenuView } from '../views/MenuView';

function mapStateToProps(state) {
  return { isHeader: state.isHeader };
}

function mapDispatchToProps(dispatch) {
  return {
    changeHomescreen: newPage => dispatch(changeHomescreen(newPage)),
  };
}

export const HomescreenContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomescreenView);

export const MenuContainer = connect(null, mapDispatchToProps)(MenuView);
