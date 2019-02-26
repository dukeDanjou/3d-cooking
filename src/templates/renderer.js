import React from "react";
import withRoot from "../withRoot";
import withStyles from "@material-ui/core/styles/withStyles";
import Layout from "../components/layout";


const styles = theme => ({
});

class Renderer extends React.Component {

    render() {

        const {classes, pageContext} = this.props

        return <Layout>
            <div className={classes.renderer}>
                <h2>{pageContext.title}</h2>
                <p>{pageContext.url}</p>
            </div>
        </Layout>

    }
}

export default withRoot(withStyles(styles)(Renderer))