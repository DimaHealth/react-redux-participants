import * as types from '../constants/actionTypes.js';

let initialState = {
    participants:[]
};
let partStorage = localStorage.getItem("participants")
if(partStorage){
    try {
        initialState = JSON.parse(partStorage)

    }catch(e){
        console.error(e);
        initialState = {
            participants:[]
        }

    }
}

export default function addParticipant(state = initialState, action) {
    switch (action.type) {

        case types.ADD_PARTICIPANT:
             let obj = {
            ...state,
                participants: state.participants.concat(action.payload)
            }
            localStorage.setItem("participants", JSON.stringify(obj))
            return {
                ...state,
                participants: state.participants.concat(action.payload)
            }
        default:
            return state;
    }
}
