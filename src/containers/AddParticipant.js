import React, {Component} from "react"
import {bindActionCreators} from "redux"
import {connect} from "react-redux"
import {addNewParticipant} from "../actions/ParticipantsActions"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight} from '@fortawesome/free-solid-svg-icons'

const angleRight = <FontAwesomeIcon  icon={faAngleRight} />

class AddParticipant extends Component{

    state = {
        name: "",
        score: "",
    }

    handleChangeScore = (e) =>{
        let  val = e.currentTarget.value
        if (val === ""){
            this.setState({score: val})
            return
        }
        val = parseInt((val).trim(), 10);
        if (this.isNumeric(val) && val !== 0){
            this.setState({score: val})
        }
    }

    handleChangeName = (e) =>{
        this.setState({name: (e.currentTarget.value)})
    }

    addParticipant = () =>{
        let state = this.state;
        if(state.name.trim().length === 0 || state.score.length === 0){
            alert("Поля не должны быть пустыми")
            return
        }
        this.props.add({
            name: state.name,
            score: state.score
        })
        this.resetState();
    }

    resetState = () =>{
        this.setState({name: "", score: ""});
    }

    handleSubmit = (e) =>{
        if (e.which === 13) {
            this.addParticipant()
        }
    }

    isNumeric(n) {
        return !isNaN(parseFloat(n)) && isFinite(n);
    }

    render(){
        const name = this.state.name;
        const score = this.state.score;

        return(
            <div className="add-participant">
                <div className="add-participant__head">
                    Добавить участника
                </div>
                <div className="add-participant__content">
                    <div className="add-participant__fields">
                        <div className="add-participant__fields-item">
                            <div className="participants-input">
                                <label htmlFor="name">Имя и фамилия</label>
                                <input onKeyDown={this.handleSubmit} onChange={this.handleChangeName} type="text" value={name} id="name"/>
                            </div>
                        </div>
                        <div className="add-participant__fields-item">
                            <div className="participants-input">
                                <label htmlFor="score">Количество очков</label>
                                <input onKeyDown={this.handleSubmit} onChange={this.handleChangeScore} type="text" value={score} id="score"/>
                            </div>
                        </div>
                    </div>
                    <div className="add-participant__button">
                        <div className="add-button" onClick={this.addParticipant}>
                            <div className="add-button__text">
                                Добавить
                            </div>
                            <div className="add-button__arrow">
                                {angleRight}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

function MatchDispatchToProps(dispatch) {
    return bindActionCreators({
        add: addNewParticipant
    }, dispatch)
}

export default connect(null, MatchDispatchToProps)(AddParticipant)
