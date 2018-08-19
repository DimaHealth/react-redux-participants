import React from "react"
import AddParticipant from "../containers/AddParticipant"
import ParticipantsList from "../containers/ParticipantsList"
import Menu from "./Menu"

const Participants = () =>(
    <div className="participants">
        <div className="participants__menu">
            <Menu/>
        </div>
        <div className="participants__content">
            <div className="participants__item">
                <AddParticipant/>
            </div>
            <div className="participants__item">
                <ParticipantsList/>
            </div>
        </div>

    </div>
)



export default Participants