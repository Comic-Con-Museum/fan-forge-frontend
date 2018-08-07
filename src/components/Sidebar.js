import React from 'react'
import { connect } from 'react-redux'
import Link, { NavLink } from 'redux-first-router-link'

import styles from '../css/Sidebar'

const Sidebar = ({ path, dispatch }) => (
  <div className={styles.sidebar}>
    <h2>SEO-FRIENDLY LINKS</h2>

    <NavLink to='/' exact activeClassName={styles.active}>
      Home
    </NavLink>

    <NavLink
      activeClassName={styles.active}
      to={{ type: 'LIST', payload: { category: 'redux' } }}
    >
      Redux
    </NavLink>

    <Link
      className={isActive(path, '/list/react')}
      to={{ type: 'LIST', payload: { category: 'react' } }}
    >
      React
    </Link>

    <div style={{ height: 20 }} />

    <h2>EVENT HANDLERS</h2>

    <span
      role='link'
      tabIndex='0'
      className={isActive(path, '/')}
      onClick={() => dispatch({ type: 'HOME' })}
    >
      Home
    </span>

    <span
      role='link'
      tabIndex='0'
      className={isActive(path, '/list/redux')}
      onClick={() => dispatch({ type: 'LIST', payload: { category: 'redux' } })}
    >
      Redux
    </span>

    <span
      role='link'
      tabIndex='0'
      className={isActive(path, '/list/react')}
      onClick={() => dispatch({ type: 'LIST', payload: { category: 'react' } })}
    >
      React
    </span>
  </div>
)

const isActive = (actualPath, expectedPath) =>
  actualPath === expectedPath ? styles.active : ''

const mapStateToProps = state => ({
  path: state.location.pathname
})

export default connect(mapStateToProps)(Sidebar)
