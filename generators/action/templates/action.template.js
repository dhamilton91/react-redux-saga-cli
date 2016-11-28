import {
	<%=ACTION_CONSTANT%>
} from '../constants/ActionTypes';


function example(<%=REDUCER_NAME%>) {
	return {
		type: <%=ACTION_CONSTANT%>,
		<%=REDUCER_NAME%>
	};
}

export {
	example
};
