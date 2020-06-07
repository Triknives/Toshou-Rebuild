import React, {Component, Fragment} from 'react';
import{
  Navbar
} from 'reactstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {logout} from '../actions/authActions';

const appNavbar = ({ auth: { isAuthenticated, loading }, logout }) => {
  const authLinks = (
    <ul>
      <li>
        <a href='/profiles'><i class="fas fa-users" />{' '}Community Members</a>
      </li>
      <li>
        <a href='/posts'>Message Board</a>
      </li>
      <li>
        <a href='/dashboard'>
        <i class="fas fa-user-tie" />{' '}
          <span className='hide-sm'>Profile</span>
        </a>
      </li>
      <li>
        <a onClick={logout} href='#!'>
          <i className='fas fa-sign-out-alt' />{' '}
          <span className='hide-sm'>Logout</span>
        </a>
      </li>
    </ul>
  );

  const guestLinks = (
    <ul>
      <li>
        <a href='/register'>Register</a>
      </li>
      <li>
        <a href='/login'>Login</a>
      </li>
    </ul>
  );

  return (
    <nav className='navbar bg-dark'>
      <h1>
        <a href='/'>
          iiSho
        </a>
      </h1>
      {!loading && (
        <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
      )}
    </nav>
  );
};

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, { logout })(appNavbar);
