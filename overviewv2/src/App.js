import React from "react";

class Overview extends React.Component {
   state = {
      loading: true,
      loadingMsg: "Overview is loading...",
      product: null,
   };

   componentDidMount() {
      fetch("http://localhost:3555/")
         .then((res) => res.json())
         .then((data) => {
            this.setState({ loading: false, product: data });
         });
   }

   render() {
      if (this.state.loading) {
         return <h1>{this.state.loadingMsg}</h1>;
      }
      const productOV = this.state.product[0].overview;
      return (
         <div className="productOverview">
            {productOV.map((pic) => {
               return <img className="OVpictures" src={pic} alt="Product Overview" />;
            })}
         </div>
      );
   }
}

export default Overview;
