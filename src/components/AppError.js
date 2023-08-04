import React from "react"

function AppError({ error, loading }) {
    return (
      <>
        {error && !loading && <div className="alert alert-danger mt-3">{error}</div>}
      </>
    );
  }
  
  export default AppError;