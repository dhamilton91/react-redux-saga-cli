import {
	<%=ACTION_CONSTANT%>
} from '../constants/ActionTypes';


const initialState = {

};

export default (state = initialState, action) => {
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
