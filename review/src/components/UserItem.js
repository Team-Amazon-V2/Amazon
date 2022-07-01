import React from 'react'


class UserItem extends React.Component {


    render() {
       
         
        const handleSetSingleUser = (e) => {
            this.props.setSingleUser(e)
        }

        const stars = document.querySelectorAll('.ratings_stars');

            document.addEventListener('click', (evt) => {
            if (evt.target.classList.contains('ratings_stars')) {
                    let clicktargetReached = false;
                    for (const star of stars) {
                     star.classList[clicktargetReached ? 'remove' : 'add']('selected');
                    if (star === evt.target) {
                         clicktargetReached = true;
                      }
                    }
                    console.log(evt.target.dataset.rating);
                 }
            });
        
        
        const helpClick = (e) =>{
           
            alert("thank you for your feedback!")
            
            
            
        }
            
        const reportClick = (e) =>{

            alert("thank you for your feedback!")

        }

        

        return (
            this.props.users.map((user,index) => (
                <div className="singledata">
                    
                    <h2 key={index} onClick={handleSetSingleUser} id={user.id}>UserName: {user.name}</h2>
                   
                    <div class="rating">Star Rating 
                                <i class="ratings_stars fa fa-star" data-rating="1"></i>
                                <i class="ratings_stars fa fa-star" data-rating="2"></i>
                                <i class="ratings_stars fa fa-star" data-rating="3"></i>
                                <i class="ratings_stars fa fa-star" data-rating="4"></i>
                                <i class="ratings_stars fa fa-star" data-rating="5"></i>
                    </div>
                    <div classname='verified'>
                        <h4>Reviewed in the United States</h4>
                        <h4>Verified Purchase</h4>


                    </div>
                    <h2 key={index} onClick={handleSetSingleUser} id={user.id}>Review: {user.review}</h2>
                    
                   
                   
                            <button className="helpfulbtn" onClick={helpClick}>Helpful</button>
                            <button className="reportbtn" onClick={reportClick}>Report</button>
                            
                           
                  
                </div>
            ))
        )
    }

}

export default UserItem