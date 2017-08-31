import React, { Component } from 'react';
import PropTypes from 'prop-types';
<%if (STYLESHEET === 'Y') { -%>import styles from './styles.css';<% } -%>


class <%=COMPONENT_NAME%> extends Component {

    render(){
        return (
            <div></div>
        );
    }

}

<%=COMPONENT_NAME%>.propTypes = {

};

export default <%=COMPONENT_NAME%>;
