import React, {Component} from "react"
import PropTypes from "prop-types"
import {graphql, StaticQuery} from "gatsby"

import Header from "./header"
import {withStyles} from "@material-ui/core";

const styles = theme => ({
    root: {
        textAlign: 'center',
        paddingTop: theme.spacing.unit * 20,
    },
});

class Layout extends Component {

    render() {

        const {classes, children} = this.props;

        return <StaticQuery
            query={siteTitleQuery}
            render={data => (
                <>
                    <Header title={data.site.siteMetadata.title}/>
                    <main className={classes.root}>{children}</main>
                </>
            )}
        />
    }
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default withStyles(styles)(Layout)

const siteTitleQuery = graphql`
    query SiteTitleQuery {
        site {
            siteMetadata {
                title
            }
        }
    }
`