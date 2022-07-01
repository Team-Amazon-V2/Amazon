import React from 'react'
import Loading from './components/Loading'
import Users from './components/Users'
import SingleUser from './components/SingleUser'
import './ReviewApp.css'

class ReviewApp extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      users: null,
      singleUser: null,
      loading: true,
      loadingMessage: 'App is loading ...'

    }
  }


  componentDidMount() {
       fetch('http://localhost:3501/api/reviews')
     
       .then((res) => res.json())
    
       .then((data) => this.setState({ users: data, loading: false }))
       .catch((err) => console.log(err.message))
  }


  render() {

    const setSingleUser = (e) => {
      this.setState({ loading: true })
      fetch(`http://localhost:3501/api/reviews/${e.target.id}`)
        .then((res) => res.json())
        .then((data) => this.setState({ singleUser: data, loading: false }))
    }

    const clearSingleUser = () => {
      this.setState({ singleUser: null })
    }
    
    
   

    const deleteSingleUser = (e) => {
      console.log(e.target.id)
      
      fetch(`http://localhost:3501/api/reviews/${e.target.id}`,{
      method: 'DELETE',
      headers:{'Content-Type': 'application/json'}
      })
      .then(()=> window.location.reload())
}
      
      
      const updateSingleUser = (e) => {
        var newpost=prompt("enter a new review")
             console.log(newpost) 

      const body={
                  review:newpost
                 }


      fetch(`http://localhost:3501/api/reviews/${e.target.id}`,{
      method: 'PATCH',
      headers:{'Content-Type': 'application/json'},
      body:JSON.stringify(body)
      })
      .then(()=> window.location.reload())
       
    }

      

    if (this.state.loading) {
      return (
        <Loading message={this.state.loadingMessage} />
      )

    }


    if (this.state.singleUser){
      return  (
        <SingleUser singleUser={this.state.singleUser} clearSingleUser={clearSingleUser} deleteSingleUser={deleteSingleUser} updateSingleUser={updateSingleUser}/>
      )

      
    }

    return (

      this.state.users ? <Users users={this.state.users} setSingleUser={setSingleUser} /> : null

    )
  }
}



export default ReviewApp;
