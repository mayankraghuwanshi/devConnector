import React from 'react'
function OptionList({
    linkName ,
    type,
    placeholder,
    name,
    error,}) {
    return(
        <div className="input-group mb-3">
            <div className="input-group-prepend">
                <span className="input-group-text">
                  <i className={linkName}></i>
                </span>
            </div>
            <input type={type} className="form-control form-control-lg" placeholder={placeholder}
                   name={name}/>
        </div>
    )

}
export default OptionList