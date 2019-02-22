import React, {Component} from 'react'
import {graphql} from 'gatsby'
import * as PropTypes from "prop-types";
import Layout from "../components/layout";
import withRoot from "../withRoot";

class DataTest extends Component {

    render() {
        return <Layout>
            {this.props.data.site.siteMetadata.description}
        </Layout>
    }
}

DataTest.propTypes = {data: PropTypes.any}

export const query = graphql`
    query HomePageQuery {
        site {
            siteMetadata {
                description
            }
        }
    }
`

export default withRoot(DataTest)