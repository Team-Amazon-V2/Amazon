import React from 'react'
import Loading from './components/Loading'
import Overviews  from './components/Overviews'
import './Overviewapp.css'

class OverviewApp extends React.Component {

    constructor(props) {
      super(props)
      this.state = {
        overviews: null,
        loading: true,
        loadingMessage: 'App is loading ...'
  
      }
    }

    componentDidMount() {
        fetch('http://localhost:3502/api/overviews')
       
         .then((res) => res.json())
     
         .then((data) => this.setState({ overviews: data, loading: false }))
       
         .catch((err) => console.log(err.message))
   }
 
   render() {

    // const setSingleOverview = (e) => {
    //     this.setState({ loading: true })
    //     fetch(`api/reviews/${e.target.productname}`)
    //       .then((res) => res.json())
    //       .then((data) => this.setState({ singleoverview: data, loading: false }))
    //   }

    if (this.state.loading) {
        return (
          <Loading message={this.state.loadingMessage} />
        )
  
      }

      return (

        this.state.overviews ? <Overviews overviews={this.state.overviews}   /> :null
  
      )

   

      }
    }

export default OverviewApp;