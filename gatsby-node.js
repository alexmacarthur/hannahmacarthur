/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const createPosts = require(`./gatsby/createPosts`)

exports.createPages = async ({ actions, graphql }) => {
    await createPosts({ actions, graphql })
}
