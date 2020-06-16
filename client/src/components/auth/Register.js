import React, {useState} from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { setAlert } from '../../actions/alert' 
import { register } from '../../actions/auth.action' ;
import PropTypes from 'prop-types'

const Register = ({ setAlert, register, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const { name, email, password, confirmPassword} = formData;

  const onChange = e => setFormData({...formData, [e.target.name]: e.target.value})
  
  const onSubmit = async e => {
    e.preventDefault();
    if (password !== confirmPassword){
      setAlert('Password do not match', 'danger');
    }else {
      register({ name, email, password });
    //   const newUser = {
    //     name, 
    //     email, 
    //     password, 
    //   }
    //   try {
    //     const config = {
    //       headers: {
    //         'Content-Type': 'application/json'
    //       }
    //     }
    //     const body = JSON.stringify(newUser);

    //     const res = await axios.post('/api/users', body, config);
    //     console.log(res.data);
    //   } catch (err) {
    //     console.error(err.response.data);
    //   }
    }
  };
  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }
  return (
    <>
    <h1 className="large text-primary">Sign Up</h1>
      <p className="lead"><i className="fas fa-user"></i> Create Your Account</p>
      <form className="form" onSubmit={onSubmit}>
        <div className="form-group">
          <input type="text" 
          placeholder="Name" 
          value = {name}
          onChange={onChange}
          name="name" required />
        </div>
        <div className="form-group">
          <input type="email" 
          placeholder="Email Address" 
          name="email" 
          value={email}
          onChange={onChange}
          required
          />
          <small className="form-text"
            >This site uses Gravatar so if you want a profile image, use a
            Gravatar email</small>
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={password}
            onChange={onChange}
            minLength="6"
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Confirm Password"
            name="confirmPassword"
            value={confirmPassword}
            onChange={onChange}
            minLength="6"
          />
        </div>
        <input type="submit" className="btn btn-primary" value="Register" />
      </form>
      <p className="my-1">
        Already have an account? <Link to='/login'>Sign In</Link>
      </p>
      </>
  )
}
Register.propTypes = {
  setAlert: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
}
const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
})
export default connect(
  mapStateToProps,
  { setAlert, register }
  )(Register);
