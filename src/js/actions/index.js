import fetch from 'isomorphic-fetch'
import C from './constants'

export const selectUser = (user) => {
    console.log("You clicked on user: ", user.first);
    return {
        type: 'C.USER_SELECTED',
        payload: user
    }
};


