import React, {Component} from "react"
import {Link} from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import withRoot from "../withRoot";
import withStyles from "@material-ui/core/styles/withStyles";

const styles = theme => ({
    image: {
        maxWidth: `300px`,
        margin: 'auto'
    }
});

class IndexPage extends Component {

    render() {

        const {classes} = this.props

        return <Layout>
            <SEO title="Home" keywords={[`gatsby`, `application`, `react`]}/>
            <h1>Hi people</h1>
            <p>Welcome to your new Gatsby site.</p>
            <p>Now go build something great.</p>
            <div className={classes.image}>
                <Image/>
            </div>
            <Link to="/dataTest/">Go to page 2</Link>
        </Layout>
    }
}

export default withRoot(withStyles(styles)(IndexPage))