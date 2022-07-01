import React from 'react'
import Button from './Button'
import Deletebtn from './deletebtn'
import Updatebtn from './updatebtn'

class SingleUser extends React.Component {
    render() {
        
        return (
          <div className="singleuser">
            <h1>Name: {this.props.singleUser[0].name}</h1>
            <h1>Userreview: {this.props.singleUser[0].review}</h1> 

           
           
           <Button clearSingleUser={this.props.clearSingleUser}/>
           <Deletebtn singleUser={this.props.singleUser} deleteSingleUser={this.props.deleteSingleUser}/>
           <Updatebtn singleUser={this.props.singleUser} updateSingleUser={this.props.updateSingleUser}/>
         </div>
        )

       
    }
}

export default SingleUser