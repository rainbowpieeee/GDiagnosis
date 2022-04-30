import React, { Component } from "react";
import CheckBox from "../components/CheckBox/CheckBox";
import Input from "../components/Input/Input";
import TextArea from "../components/TextArea/TextArea";
import Select from "../components/Select/Select";
import Button from "../components/Button/Button";

class FormContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            newUser: {
                name: "",
                age: "",
                gender: "",
                skills: [],
                about: ""
            },

            genderOptions: ["Мужской", "Женский"],
            skillOptions: ["Изжога", "Отрыжка", "Дисфагия", "Срыгивание", "Загрудинная боль",
                "Осиплость", "Тошнота", "Рвота", "Кислый привкус во рту", "Мужской пол",
                "Ночной кашель", "Избыточный вес", "Курение", "ГЭРБ > 5 лет", "Чувство быстрого насыщения после приема пищи",
                "GERD-Q >= 8", "RSI >= 13", "Тяжесть", "Скопление газа в желудке", "Злоупотребление алкоголем"]
        };
        this.handleTextArea = this.handleTextArea.bind(this);
        this.handleAge = this.handleAge.bind(this);
        this.handleFullName = this.handleFullName.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.handleClearForm = this.handleClearForm.bind(this);
        this.handleCheckBox = this.handleCheckBox.bind(this);
        this.handleInput = this.handleInput.bind(this);
    }

    /* Этот хук запускается, когда компонент монтируется. */

    handleFullName(e) {
        let value = e.target.value;
        this.setState(
            prevState => ({
                newUser: {
                    ...prevState.newUser,
                    name: value
                }
            }),
            () => console.log(this.state.newUser)
        );
    }

    handleAge(e) {
        let value = e.target.value;
        this.setState(
            prevState => ({
                newUser: {
                    ...prevState.newUser,
                    age: value
                }
            }),
            () => console.log(this.state.newUser)
        );
    }

    handleInput(e) {
        let value = e.target.value;
        let name = e.target.name;
        this.setState(
            prevState => ({
                newUser: {
                    ...prevState.newUser,
                    [name]: value
                }
            }),
            () => console.log(this.state.newUser)
        );
    }

    handleTextArea(e) {
        console.log("Inside handleTextArea");
        let value = e.target.value;
        this.setState(
            prevState => ({
                newUser: {
                    ...prevState.newUser,
                    about: value
                }
            }),
            () => console.log(this.state.newUser)
        );
    }

    handleCheckBox(e) {
        const newSelection = e.target.value;
        let newSelectionArray;

        if (this.state.newUser.skills.indexOf(newSelection) > -1) {
            newSelectionArray = this.state.newUser.skills.filter(
                s => s !== newSelection
            );
        } else {
            newSelectionArray = [...this.state.newUser.skills, newSelection];
        }

        this.setState(prevState => ({
            newUser: { ...prevState.newUser, skills: newSelectionArray }
        }));
    }

    handleFormSubmit(e) {
        e.preventDefault();
        let userData = this.state.newUser;

        fetch("http://192.168.0.169:3000", {
            method: "POST",
            body: JSON.stringify(userData),
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            }
        }).then(response => {
            response.json().then(data => {
                console.log("Successful" + data);
            });
        });
    }

    handleClearForm(e) {
        e.preventDefault();
        this.setState({
            newUser: {
                name: "",
                age: "",
                gender: "",
                skills: [],
                about: ""
            }
        });
    }

    render() {
        return (
            <form className="container-fluid" onSubmit={this.handleFormSubmit}>
                <Input
                    inputType={"text"}
                    title={"Полное имя"}
                    name={"name"}
                    value={this.state.newUser.name}
                    placeholder={"Введите имя"}
                    handleChange={this.handleInput}
                />{" "}
                {/* Имя пользователя */}
                <Input
                    inputType={"number"}
                    name={"age"}
                    title={"Возраст"}
                    value={this.state.newUser.age}
                    placeholder={"Введите возраст"}
                    handleChange={this.handleAge}
                />{" "}
                {/* Возраст */}
                <Select
                    title={"Пол"}
                    name={"gender"}
                    options={this.state.genderOptions}
                    value={this.state.newUser.gender}
                    placeholder={"Выберите пол"}
                    handleChange={this.handleInput}
                />{" "}
                {/* Выбор возраста */}
                <CheckBox
                    title={"Симптомы"}
                    name={"skills"}
                    options={this.state.skillOptions}
                    selectedOptions={this.state.newUser.skills}
                    handleChange={this.handleCheckBox}
                />{" "}
                {/* Симптомы */}
                <TextArea
                    title={"О вас"}
                    rows={10}
                    value={this.state.newUser.about}
                    name={"currentPetInfo"}
                    handleChange={this.handleTextArea}
                    placeholder={"Опишите симптомы, не вошедшие в список"}
                />
                {/* О себе */}
                <Button
                    action={this.handleFormSubmit}
                    type={"primary"}
                    title={"Отправить"}
                    style={buttonStyle}
                />{" "}
                {/* Отправить */}
                <Button
                    action={this.handleClearForm}
                    type={"secondary"}
                    title={"Очистить"}
                    style={buttonStyle}
                />{" "}
                {/* Очистка формы */}
            </form>
        );
    }
}

const buttonStyle = {
    margin: "10px 10px 10px 10px"
};

export default FormContainer;