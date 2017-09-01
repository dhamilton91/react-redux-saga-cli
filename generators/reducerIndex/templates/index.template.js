import { combineReducers } from 'redux';

<% for (var i = 0; i < reducers.length; i++) { %>import <%= reducers[i].split('.')[0][0].toLowerCase() + reducers[i].split('.')[0].slice(1) %> from './containers/<%=reducers[i].split('.')[0]%>/reducer';
<% } %>

export default combineReducers({
<% for (var i = 0; i < reducers.length; i++) { %>    <%= reducers[i].split('.')[0][0].toLowerCase() + reducers[i].split('.')[0].slice(1) %>,
<% } -%>
});
