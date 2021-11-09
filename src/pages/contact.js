import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Head from '../components/head'

const ContactPage = () => {
    return (
        <Layout>
            <Head title="Contact" />
            <h1>Contact us</h1>
            <p>Phone: (xx) xxxxx-xxxx</p>

		    <p>Go back <Link to="/">home page.</Link></p>
        </Layout>
    )
}

export default ContactPage