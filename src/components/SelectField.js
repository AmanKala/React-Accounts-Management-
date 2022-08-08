import React from "react";

const SelectField = (props) =>{
    return(
        <>
            <div>
                <label >{props.title}</label>
                <br/>
                <select className="shadow appearance-none border rounded w-half py-2 px-3 text-gray-700 focus:shadow-outline" name={props.name} required onChange={props.onChange}>
                    {
                        props.dropdown.map((ele)=>{
                            return(
                                <option value={ele} key={ele}> {ele} </option>
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