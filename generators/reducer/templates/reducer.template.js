import {
	<%=ACTION_CONSTANT%>
} from '../constants/ActionTypes';


export default function (state = {}, action) {
    switch (action.type) {
		case '<%=ACTION_CONSTANT%>':
            return {
                ...state,
				...action.<%=REDUCER_NAME%>
            };
        default:
            return state;
    }
}
