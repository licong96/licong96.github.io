
import { handleActions } from 'redux-actions';
import * as ActionTypes from '../../constants/ActionTypes';

const initState: HomeState = {
    data: {}
}

const state = handleActions(
    {
        [ActionTypes.UPDATE_DADA]: (state: HomeState, { payload }: RootAction) => {
            return {
                ...state,
                data: payload
              }
        },
    },
    initState
);


export default state;