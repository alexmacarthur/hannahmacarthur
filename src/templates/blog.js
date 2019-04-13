import React from "react";
import { graphql } from "gatsby";

export default function (props) {

    console.log(props);

    return (
      <span>
        blog
      </span>
    )
}

export const query = graphql`
  query GET_POSTS($ids: [ID]) {
    wpgraphql {
      posts(where: { in: $ids }) {
        nodes {
          title
        }
      }
    }
  }
`
