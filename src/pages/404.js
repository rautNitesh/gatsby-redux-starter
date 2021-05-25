import React from 'react';
import { useSelector } from 'react-redux';

import Layout from '../components/layout/layout';
import SEO from '../components/seo';

const NotFoundPage = () => {
  const state = useSelector(state=>state);
  return  <Layout>
    <SEO title="404: Not found" />
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </Layout>
}

export default NotFoundPage;
