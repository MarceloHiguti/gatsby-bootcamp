import React from 'react'
import '../styles/index.scss'
import * as layoutStyle from './layout.module.scss'

import Header from './header'
import Footer from './footer'

const Layout = (props) => {
    return (
        <div className={layoutStyle.container}>
            <div className={layoutStyle.content}>
                <Header />
                { props.children }
            </div>
            <Footer />
        </div>
    )
}

export default Layout