import {AmbientLight, DirectionLight, GLTFModel} from 'react-3d-viewer'
import React from "react";
import withRoot from "../withRoot";
import withStyles from "@material-ui/core/styles/withStyles";
import Layout from "../components/layout";


const styles = theme => ({
    renderer: {
        margin: 'auto'
    }
});

class Renderer extends React.Component {

    render() {

        const {classes, pageContext} = this.props

        return <Layout>
            <div className={classes.renderer}>
                <GLTFModel src={pageContext.url}>
                    <AmbientLight color={0xffffff}/>
                    <DirectionLight color={0xffffff} position={{x: 100, y: 200, z: 100}}/>
                    <DirectionLight color={0xff00ff} position={{x: -100, y: 200, z: -100}}/>
                </GLTFModel>
            </div>
        </Layout>

    }
}

export default withRoot(withStyles(styles)(Renderer))