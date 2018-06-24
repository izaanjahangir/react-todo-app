import React from "react";

function InputForm(props){
    return(
        <form onSubmit={props.addTaskHandler}>
            <div className="input-group">
                <input
                    type="text"
                    onChange={props.getUserInputHandler}
                    value={props.value}
                    className="form-control"
                />
                <input type="submit" className="btn btn-info" value="Add" />
            </div>
        </form>
    )
}


export default InputForm;


