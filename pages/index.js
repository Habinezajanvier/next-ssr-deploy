import Layout from '../components/layout';
import axios from 'axios';
// import fetch from 'isomorphic-unfetch';
import React from 'react';

const Index = ({ productData }) => {
  console.log(productData);
  return (
    <Layout>
      <div>
        <h1>Welcome to Next Application</h1>
        <h3>Product List</h3>
        {productData.map((item, i) => {
          return (
            <>
              <li key={i}>{item.title}</li>
            </>
          );
        })}
      </div>
    </Layout>
  );
};

Index.getInitialProps = async function () {
  const response = await axios.get("https://gorest.co.in/public/v2/posts");
  await console.log("==response==>",response);
  // const result = await response.json();
  return { productData: response.data };
};

export default Index;
