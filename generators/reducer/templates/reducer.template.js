import {

} from '../constants/ActionTypes';


export default function (state = {}, action) {
    switch (action.type) {
        case '<%=ACTION_NAME%>':
            return {
                ...state,

            };
        default:
            return state;
    }
}
