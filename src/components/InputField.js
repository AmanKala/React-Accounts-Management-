import React from "react";

const InputField = (props) =>
{
    return(
        <>
            <div>
                <label className="px-5">{props.title}</label>
                {
                    <input className="shadow appearance-none border rounded w-half py-2 px-3 text-gray-700 focus:shadow-outline" type={props.type} name={props.name} value={props.value} onChange={props.onChange} required />
                }
                <br/><br/>
            </div>
        </>
    )

}

export default InputField;
