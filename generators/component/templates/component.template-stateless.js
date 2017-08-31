import React from 'react';
import PropTypes from 'prop-types';
<%if (STYLESHEET === 'Y') { -%>import styles from './styles.css';<% } -%>


function <%=COMPONENT_NAME%> ({}) {
    return (
        <div></div>
    );
}

<%=COMPONENT_NAME%>.propTypes = {

};

export default <%=COMPONENT_NAME%>;
