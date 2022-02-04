import React from 'react';

const CommentBox = (props) => {
    const {id, name , email, body} = props.comment ;
    return ( 
        
           <div className="comment-section">
               <h4>User id: {id}</h4>
               <h4>Name: {name}</h4>
               <h4>Email: {email}</h4>

               <p className='comment-text'
               >{body}</p>
            </div> 
            
       
    );
};

export default CommentBox;