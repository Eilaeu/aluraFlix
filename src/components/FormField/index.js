import React from "react";

function FormField({ label, type, name, value, onChange }){
    const props = { label, type, name, value, onChange}
    let input = <input { ...props }></input>
        if (type === "textarea") {
            delete props.type;
            input = <textarea {...props}></textarea>
        }
    
        return(
            <div>
                <label >{label}</label>
                {input}
            </div>
        )
}
export default FormField;