
import React from 'react'
import UserItem from './UserItem'

class Users extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
           newname:"",
           newreview:""
        }
    }

    render() {

        const handlecreateSingleUser=(e)=>{
         
                fetch(`api/reviews/`,{
                method: 'POST',
                headers:{'Content-Type': 'application/json'},
                body:JSON.stringify(this.state)
                })
                .then(()=> window.location.reload())
        }
        
        const handleChange=(e)=>{
            
            let targetName = e.target.name
            this.setState({
                [targetName]: e.target.value
            })
        }

        return (<>
         <div className="userinput">
                <input onChange={handleChange} value={this.state.newname} name="newname" className="createuser" type="text" />
                <input onChange={handleChange} value={this.state.newreview} name="newreview" className="createreview" type="text" /> 
                <button className="createbtn" onClick={handlecreateSingleUser}>create new review</button>

        </div>
            
            <UserItem users={this.props.users} setSingleUser={this.props.setSingleUser} />
        
         </>
           
        )

    }
}

export default Users