import React from "react";
import { Helmet } from "react-helmet";
 
class FixrEvents extends React.Component {
  render () {
    return (
        <div className="App">
            <Helmet>
                <meta charSet="utf-8" />
                <title>My Title</title>
                <link rel="canonical" href="https://web-cdn.fixr.co/scripts/fixr-shop-widget.v1.min.js" />
            </Helmet>
          
        </div>
    );
  }
};

export default FixrEvents