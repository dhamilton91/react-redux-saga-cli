<% for (var i = 0; i < sagas.length; i++) { %>import <%= sagas[i].split('.')[0] %> from './containers/<%=sagas[i].split('.')[0]%>/sagas';
<% } %>

export default function*() {
	yield [
<% for (var i = 0; i < sagas.length; i++) { %>		<%= sagas[i].split('.')[0] %>(),
<% } -%>
	];
};
