import React from "react"

const AppLoader = () => {
    return (
      <div className="d-flex align-items-center">
        <strong>Please Wait...</strong>
        <div className="spinner-border ms-auto" role="status" aria-hidden="true"></div>
      </div> 
    );
  };
  
  export default AppLoader;