import React, { Fragment, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../actions/actionCreators';
import Alert from '../Alert';

const Login = () => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });

  const { username, password } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    dispatch(login(username, password));
  };

  if (isAuthenticated) {
    return <Redirect to="/builds" />;
  }

  return (
    <Fragment>
      <div className="text-center">
        <a href="#myModal" className="trigger-btn" data-toggle="modal">
          Click to Open Login Modal
        </a>
      </div>

      <div id="myModal" className="modal fade">
        <div className="modal-dialog modal-login">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Login</h4>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-hidden="true"
              >
                &times;
              </button>
            </div>
            <div className="modal-body">
              <form onSubmit={e => onSubmit(e)}>
                <div className="form-group">
                  <input
                    type="text"
                    placeholder="Username"
                    name="username"
                    value={username}
                    onChange={e => onChange(e)}
                    required
                    className="form-control"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    value={password}
                    onChange={e => onChange(e)}
                    minLength="6"
                    className="form-control"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="submit"
                    className="btn btn-primary btn-block btn-lg"
                    value="Login"
                  />
                </div>
              </form>
            </div>
            <Alert />
            <div className="modal-footer">
              Don't have an account? <Link to="/register">Sign Up</Link>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Login;
