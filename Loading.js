import React from 'react'
import loading from './runner.gif'

 const Loading = () => {
    return (
       <React.Fragment>
        <img src={loading} alt="loading..." style ={{width:'500px',display:'block',margin:'auto'}}/>
       </React.Fragment>
    )
}
export default Loading