import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  View,
} from 'react-native';
<%if (STYLESHEET === 'Y') { -%>import styles from './stylesheet';<% } -%>


class <%=COMPONENT_NAME%> extends Component {

    render(){
        return (
            <View></View>
        );
    }

}

<%=COMPONENT_NAME%>.propTypes = {

};

export default <%=COMPONENT_NAME%>;
