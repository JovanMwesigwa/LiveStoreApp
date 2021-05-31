/* eslint-disable prettier/prettier */
import React from 'react';
import WooCommerceAPI from 'react-native-woocommerce-api';

const WooCommerce = new WooCommerceAPI({
    url: "https://livestoretrade.com/", // Your store URL
    ssl: true,
    consumerKey: "ck_6a313981f89e495a5223da12d74369a374e7336d",
    consumerSecret: "cs_d3018750c87bdd115489f5436c3cb0bfe6330025",
    wpAPI: true,
    version: "wc/v3",
    queryStringAuth: true
  });

const useFetchData = (url) => {
    const [ data, setData ] = React.useState([]);
    const [ loading, setLoading ] = React.useState(false);
    const [ error, setError ] = React.useState("")

    const fetchDataAPI = () => {
        setLoading(true);
        WooCommerce.get(url,{
            per_page: 20, 
          })
          .then((data) => {
            setLoading(false);
            setData(data);
          })
          .catch((error) => {
            setLoading(false);
            setError(error);
          });
      };
      return {
        fetchDataAPI,
          data,
          loading,
          error
      }
  }

export default useFetchData;

 