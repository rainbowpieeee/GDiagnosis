import React, { Component } from "react";
import FormContainer from "../../containers/FormContainer";
import './Main.css'
import {connect} from "react-redux";
import {ReactComponent as Star} from "../../images/star.svg";
import Header from "../../containers/Header/Header";

const TITLE = 'Пройденные анкеты'
const USER = 'Иванов Иван Иванович'

const styles = {
    textAlign: "center",
    margin: '40px',
    fontsize: '20px'
};

const Main = () => {
    return (
        <div className="Appointments">
            <Header
                title={TITLE}
                userName={USER}
                className='Appointments-Header'
                bodyClassName='Appointments-HeaderBody'
                renderIcon={() => (
                    <Star className='Header-Icon' />
                )}
            />
            <h2 className='Main'>Анкета: Диагностика гастроэнтерологических заболеваний</h2>
            <p className='H3'>Инструкция к анкете</p>
            <FormContainer/>
        </div>
    )
}

export default connect(null, null)(Main)