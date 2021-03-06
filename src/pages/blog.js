import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'

import Layout from '../components/layout'
import Head from '../components/head'
import * as blogStyles from './blog.module.scss'

const BlogPage = () => {
    // const data = useStaticQuery(graphql`
    //     query {
    //         allMarkdownRemark {
    //             edges {
    //                 node {
    //                     frontMatter {
    //                         title
    //                         date
    //                     }
    //                     fields {
    //                         slug
    //                     }
    //                 }
    //             }
    //         }
    //     }
    // `)

    const data = useStaticQuery(graphql`
        query {
            allContentfulBlogPost (
                sort: {
                    fields: publishedDate,
                    order: DESC
                }
            ) {
                edges {
                    node {
                        title
                        slug
                        publishedDate (formatString: "MMMM Do, YYYY")
                    }
                }
            }
        }
    `)

    // return (
    //     <Layout>
    //         <h1>Blog</h1>

    //         <ol className={blogStyles.posts}>
    //             { data?.allMarkdownRemark?.edges.map((edge) => {
    //                 return (
    //                     <li className={blogStyles.post}>
    //                         <Link to={`/blog/${edge?.node?.fields?.slug}`}>
    //                             <h2>{edge?.node?.frontMatter?.title}</h2>
    //                             <p>{edge?.node?.frontMatter?.date}</p>
    //                         </Link>
    //                     </li>
    //                 )
    //             })}
    //         </ol>
    //     </Layout>
    // )

    return (
        <Layout>
            <Head title="Blog" />
            <h1>Blog</h1>

            <ol className={blogStyles.posts}>
                { data?.allContentfulBlogPost?.edges.map((edge) => {
                    return (
                        <li className={blogStyles.post}>
                            <Link to={`/blog/${edge?.node?.slug}`}>
                                <h2>{edge?.node?.title}</h2>
                                <p>{edge?.node?.publishedDate}</p>
                            </Link>
                        </li>
                    )
                })}
            </ol>
        </Layout>
    )
}

export default BlogPage