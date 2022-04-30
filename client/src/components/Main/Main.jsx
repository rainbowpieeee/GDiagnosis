import React, { Component } from "react";
import FormContainer from "../../containers/FormContainer";
import './Main.css'

const styles = {
    textAlign: "center"
};

const Main = () => {
    return (
        <div className="col-md-6 Main">
            <h2 style={styles}>Диагностика гастроэнтерологических заболеваний</h2>
            <FormContainer/>
        </div>
    )
}

export default Main