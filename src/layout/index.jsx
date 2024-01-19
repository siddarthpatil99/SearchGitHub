import React from 'react'
import Header from '../components/header'

const Layout = ({ children }) => {
  return (
    <React.Fragment>
        <Header />
        <main>{children}</main>
        {/* <footer>App By Indian Coders</footer> */}
    </React.Fragment>
  )
}

export default Layout
