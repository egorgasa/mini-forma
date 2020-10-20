import React from "react";

function Form (props){
    return(
        <div className='foot'>
            <form onSubmit={props.Submit}>
                <input type="text"
                       className='input'
                       placeholder='message'
                       value={props.value}
                       onChange={props.handleMessage}/>
                <button className='buttom'>Send</button>
            </form>
        </div>)
}

export default Form;