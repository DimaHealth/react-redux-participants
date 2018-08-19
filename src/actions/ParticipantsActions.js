import * as types from '../constants/actionTypes';

export const addNewParticipant = ((participant)=>{
    return{
        type: types.ADD_PARTICIPANT,
        payload: participant
    }
})

