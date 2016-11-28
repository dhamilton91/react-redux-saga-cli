import React, {Component} from 'react';
import {
  View,
} from 'react-native';
<%if (STYLESHEET === 'Y') { -%>import styles from './stylesheet';<% } -%>


export default class <%=COMPONENT_NAME%> extends Component {

    render(){
        return (
            <View></View>
        );
    }

}
