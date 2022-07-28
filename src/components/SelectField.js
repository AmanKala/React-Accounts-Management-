import React from "react";

const SelectField = (props) =>{
    return(
        <>
            <div>
                <label >{props.title}</label>
                <br/>
                <select name={props.name} required onChange={props.onChange}>
                    {
                        props.dropdown.map((ele)=>{
                            return(
                                <option value={ele}> {ele} </option>
                            )
                        }) 
                    }
                </select>
                <br/><br/>
            </div>
        </>
    )
}

export default SelectField;