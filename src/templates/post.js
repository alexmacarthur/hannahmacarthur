import React from "react";
import { graphql } from "gatsby";

import Layout from '../components/layout';

export default function (props) {

    console.log(props);
    let post = props.data.wpgraphql.page;

    return (  
      <Layout>
        <div dangerouslySetInnerHTML={{ __html: post.content }}>
        </div>
      </Layout>
    )
}

export const pageQuery = graphql`
  query GET_PAGE($id: ID!) {
    wpgraphql {
      page(id: $id) {
        title
        content
        uri
      }
    }
  }
`
