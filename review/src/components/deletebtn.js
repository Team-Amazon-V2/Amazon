import React from 'react'

class Deletebtn extends React.Component {

    render() {
        const handledelete =(e) =>{
             this.props.deleteSingleUser(e)
        
            
  

        }
        return <button className="deletebtn" id={this.props.singleUser[0].id} onClick={handledelete}>Delete</button>

    }
}

export default Deletebtn