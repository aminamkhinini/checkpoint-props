

import React from 'react';
import PropTypes from 'prop-types';
const stylebtn={backgroundolor: "white",
    Color: "black", 
    Border: "2px solid #4245f8",
    borderRadius: "8px",
    fontSize: "16px",
    fontWeight:"bold"
    }

    
const Profile  = ({fullName="intissar Mkhinini",bio,profession,alertMe}) => {
    return (
        <div>
           <h1> My Profile </h1> 
           <h2> My Name is {fullName}. </h2>
           <h2> My biographie is {bio}. </h2>
           <h2> My profession is {profession}.</h2>
           <button onClick={alertMe} className="btn" style={stylebtn} > Click Me </button>
        </div>
    )
}

Profile.defaultProps={
   fullName:"Rihab Mkhinini"
};
Profile.propTypes={
    fullName:PropTypes.string,
}
export default Profile ;
