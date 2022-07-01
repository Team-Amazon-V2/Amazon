import React from "react";
import Description from "./components/Description";

class ProductDesc extends React.Component {
   state = {
      loading: true,
      product: null,
      loadingMsg: "loading product...",
   };

   componentDidMount() {
      fetch("http://localhost:3505/")
         .then((res) => res.json())
         .then((data) => {
            console.log(data);
            this.setState({ loading: false, product: data });
         });
   }

   render() {
      if (this.state.loading) {
         return <h1>{this.state.loadingMsg}</h1>;
      }
      return <Description product={this.state.product} />;
   }
}

export default ProductDesc;
