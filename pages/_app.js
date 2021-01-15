import "../scss/main.scss";
import "../public/icofont.min.css";
import App from "next/app"
import {Provider} from "react-redux"
import whitRedux from "next-redux-wrapper"

import store from "../redux/store";
import React from "react";


class MyApp extends App{
  static  async getInitialProps ({Component, ctk})
  {
    const appProps = Component.getInitialProps ? await Component.getInitialProps(ctk) : {};

    console.log(appProps);
    return {appProps : appProps};

  }

 render() {
    const {Component , appProps} = this.props;


    return (
        <Provider store={store}>
          <Component {...appProps} />
        </Provider>
    );
 }
}


const makeStore = () => store;

export default whitRedux(makeStore)(MyApp);