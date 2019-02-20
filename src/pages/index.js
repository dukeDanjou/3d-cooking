import React, {Component} from "react"
import {Link} from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

class IndexPage extends Component {

    render() {
        return <Layout>
            <SEO title="Home" keywords={[`gatsby`, `application`, `react`]}/>
            <h1>Hi people</h1>
            <p>Welcome to your new Gatsby site.</p>
            <p>Now go build something great.</p>
            <div style={{maxWidth: `300px`, marginBottom: `1.45rem`}}>
                <Image/>
            </div>
            <Link to="/pageTest/">Go to page 2</Link>
            <Link to="/pageTest/">Go to test</Link>
        </Layout>
    }
}

export default IndexPage
