import * as types from './actionTypes'

const reducer = (oldState,action)=>{

    switch(action.type){
        case(types.ADD):
        return{
            ...oldState,count: action.count
        }
        default:
            return oldState;
    }

}

export {reducer}