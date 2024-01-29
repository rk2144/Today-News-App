
import React, { Component } from 'react'
import loading from './loading.gif'

class Spinner extends Component {
    state = {  } 
    render() { 
        return (
            <div className='text-center'>
                <img src={loading}/>
            </div>
        );
    }
}
 
export default Spinner;