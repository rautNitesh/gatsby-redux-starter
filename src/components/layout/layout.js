import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { toggleDrawer as toggleDrawerAction } from '../../store/actions/app';

import './layout.scss';


const Layout = ({ children }) => (

        <>
            {children}
            <footer>
              © {new Date().getFullYear()}, Built with
              {` `}
              <a href="https://www.gatsbyjs.org">Gatsby</a>
            </footer>
        </>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default connect(
  state => ({ isDrawerOpen: state.app.isDrawerOpen }),
  dispatch => ({ toggleDrawer: open => dispatch(toggleDrawerAction(open)) }),
)(Layout);
