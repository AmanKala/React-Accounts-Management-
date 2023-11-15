import React from "react";

const SelectField = (props) =>{
    return(
        <>
            <div>
                <label className="px-5">{props.title}</label>
                <select className="shadow appearance-none border rounded w-half py-2 px-3 text-gray-700 focus:shadow-outline" name={props.name} required onChange={props.onChange}>
                    <option> {props.value!==''? props.value:`--Select--`}  </option>
                    {
                        props.dropdown.map((ele)=>{
                            if(props.value!==ele)
                            {
                                return(
                                <option value={ele} key={ele}> {ele} </option>
                                )
                            }
                        }) 
                    }
                </select>
                <br/><br/>
            </div>
        </>
    )
}

export default SelectField;