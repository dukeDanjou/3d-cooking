const path = require("path")

// Implement the Gatsby API “createPages”. This is called once the
// data layer is bootstrapped to let plugins create pages from data.
exports.createPages = ({graphql, actions}) => {
    const {createPage} = actions

    return new Promise((resolve, reject) => {
        const rendererTemplate = path.resolve(`src/templates/renderer.js`)
        // Query for markdown nodes to use in creating pages.
        resolve(
            graphql(
                `
          {
              allFile(filter: {dir: {regex: "\/blender/"}}) {
                edges {
                  node {
                    publicURL
                    name
                    base
                  }
                }
              }
          }
        `
            ).then(result => {
                console.log(result)
                if (result.errors) {
                    reject(result.errors)
                }

                // Create pages for each markdown file.
                result.data.allFile.edges.forEach(({node}) => {

                    const pageName = node.name

                    createPage({
                        path: `blender/${pageName}`,
                        component: rendererTemplate,
                        // In your blog post template's graphql query, you can use path
                        // as a GraphQL variable to query for data from the markdown file.
                        context: {
                            title: pageName,
                            url: node.publicURL
                        },
                    })
                })
            })
        )
    })
}