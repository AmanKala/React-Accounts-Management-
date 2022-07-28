import React from "react";

const InputField = (props) =>
{
    return(
        <>
            <div>
                <label >{props.title}</label>
                <br/>
                <input type={props.type} name={props.name} value={props.value} onChange={props.onChange} required/>
                <br/><br/>
            </div>
        </>
    )

}

export default InputField;
