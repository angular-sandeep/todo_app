import { connect } from 'react-redux';
import { login } from '../actions';
import Login from '../components/Login';

const mapDispatchToProps = dispatch => {
  return {
    onAuth: user => {
      dispatch(login(user));
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Login);