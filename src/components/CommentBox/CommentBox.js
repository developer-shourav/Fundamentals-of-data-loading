import React from 'react';

const CommentBox = (props) => {
    const {id, name , email, body} = props.comment ;
    return ( 
        
           <div className="comment-section">
               <h2>User id: {id}</h2>
               <h6>Name: {name}</h6>
               <h6>Email: {email}</h6>
               <p className='comment-text'
               >{body}</p>
            </div> 
            
       
    );
};

export default CommentBox;