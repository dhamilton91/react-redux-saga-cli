import React from 'react';
import PropTypes from 'prop-types';
import {
  View,
} from 'react-native';
<%if (STYLESHEET === 'Y') { -%>import styles from './stylesheet';<% } -%>


function <%=COMPONENT_NAME%> ({}) => {
    return (
        <View></View>
    );
}

<%=COMPONENT_NAME%>.propTypes = {

};

export default <%=COMPONENT_NAME%>;
