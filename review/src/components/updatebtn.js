import React from 'react'

class Updatebtn extends React.Component {

    render() {
        const handleupdate =(e) =>{
             this.props.updateSingleUser(e)     
            
        }
        return <button className="updatebtn" id={this.props.singleUser[0].id} onClick={handleupdate}>Update</button>

    }
}

export default Updatebtn