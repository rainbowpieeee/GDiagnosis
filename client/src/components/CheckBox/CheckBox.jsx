import React from "react";
import './CheckBox.css'
const CheckBox = props => {
    return (
        <div className="form-group">
            <label for={props.name} className="form-label title">
                {props.title}
            </label>
            <div className="checkbox">
                {props.options.map(option => {
                    return (
                        <label key={option} className="labels checkbox-inline">
                            <input
                                id={props.name}
                                name={props.name}
                                onChange={props.handleChange}
                                value={option}
                                checked={props.selectedOptions.indexOf(option) > -1}
                                type="checkbox"
                                className='custom-checkbox'
                            />
                            <span className='spans'>{option}</span>
                        </label>
                    );
                })}
            </div>
        </div>
    );
};

export default CheckBox;