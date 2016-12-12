<% for (var i = 0; i < middleware.length; i++) { %>import <%= middleware[i].split('.')[0] %> from './<%=middleware[i].split('.')[0]%>';
<% } %>

export {
  <% for (var i = 0; i < middleware.length; i++) { %> <%= middleware[i].split('.')[0] %>,<% } %>
};
