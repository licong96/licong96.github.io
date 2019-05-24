import * as ActionTypes from '../../constants/ActionTypes';
import { apiHome } from '../../api';

export const updateData = (payload: any) => ({
    type: ActionTypes.UPDATE_DADA,
    payload
});


// -------------------------------------------

export const getData = (params: any) => async (dispatch: any) => {
    try {
        const res = await apiHome.get(params);
        if (res.code === 200) {
            dispatch(updateData(res.data));
        }
        return res;
    } catch (err) {
        return err;
    }
};
