import React, { Component } from "react";
import CheckBox from "../components/CheckBox/CheckBox";
import Input from "../components/Input/Input";
import TextArea from "../components/TextArea/TextArea";
import Select from "../components/Select/Select";
import Button from "../components/Button/Button";
import CalculateGERD from "../components/CalculateGERD/CalculateGERD";
import CalculateRSI from "../components/CalculateRSI/CalculateRSI";
import './FormContainer.scss'
import cellEditFactory,{ Type } from 'react-bootstrap-table2-editor';

const data = [
    {id: 1, name: 'Как часто Вы ощущаете изжогу (жжение за грудиной)?', value1: '0', value2: '1', value3: '2', value4: '3'},
    {id: 2, name: 'Как часто Вы отмечали, что содержимое желудка (жидкость либо пища) ' +
            'снова попадают в глотку или полость рта (отрыжка)?', value1: '0', value2: '1', value3: '2', value4: '3'},
    {id: 3, name: 'Как часто Вы ощущали боль в центре верхней части живота?', value1: '3', value2: '2', value3: '1', value4: '0'},
    {id: 4, name: 'Как часто вы ощущали тошноту?', value1: '3', value2: '2', value3: '1', value4: '0'},
    {id: 5, name: 'Как часто изжога и/или отрыжка мешали Вам хорошо выспаться ночью?', value1: '0', value2: '1', value3: '2', value4: '3'},
    {id: 6, name: 'Как часто по поводу изжоги и/или отрыжки Вы дополнительного принимали' +
            ' другие средства, кроме рекомендованных врачом?', value1: '0', value2: '1', value3: '2', value4: '3'}
];

const data1 = [
    {id: 1, name: 'Осиплость и другие проблемы с голосом',
        editor:{
            type:Type.SELECT,
            options:[
                {label: "Рубли",value:810 },
                {label: "Доллары",value:840 },
                {label: "Евро",value:978 },
            ]}},
    {id: 2, name: 'Чувство першения в горле', value: ['0', '1', '2', '3', '4', '5']},
    {id: 3, name: 'Чрезмерное отхаркивание слизи или затекание из носа', value: ['0', '1', '2', '3', '4', '5']},
    {id: 4, name: 'Затруднение при глотании пищи, жикости или таблеток', value: ['0', '1', '2', '3', '4', '5']},
    {id: 5, name: 'Кашель после еды или после перехода в горизонтальное положение?', value: ['0', '1', '2', '3', '4', '5']},
    {id: 6, name: 'Затруднения дыхания или эпизоды удушья', value: ['0', '1', '2', '3', '4', '5']},
    {id: 7, name: 'Мучительный или надсадный кашель', value: ['0', '1', '2', '3', '4', '5']},
    {id: 8, name: 'Ощущение чего-то липкого в горле или комка в горле', value: ['0', '1', '2', '3', '4', '5']},
    {id: 9, name: 'Изжога, боль в груди, кислая отрыжка', value: ['0', '1', '2', '3', '4', '5']}
];

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
                "Тяжесть", "Скопление газа в желудке", "Злоупотребление алкоголем"]
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

        fetch("http://localhost:3000", {
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
            <form className="col-md-8 container-fluid" onSubmit={this.handleFormSubmit}>
                <CheckBox
                    title={"Выберите утверждение, если согласны с ним"}
                    name={"skills"}
                    options={this.state.skillOptions}
                    selectedOptions={this.state.newUser.skills}
                    handleChange={this.handleCheckBox}
                />{" "}
                {/* Симптомы */}
                <CalculateGERD
                    data={data}
                    cellEditor={cellEditFactory}
                />{" "}
                {/* Опросник GERD-Q */}
                <CalculateRSI
                    data={data1}
                />{" "}
                {/* Опросник RSI */}
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
    margin: "5px 5px 10px 10px"
};

export default FormContainer;