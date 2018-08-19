import {combineReducers} from "redux"

import ParticipantsReducers from "./participantsList"

const allReducers = combineReducers({
    participantsInit: ParticipantsReducers,
})

export default allReducers