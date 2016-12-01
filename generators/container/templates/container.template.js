import <%=COMPONENT_NAME%> from '../../components/<%=COMPONENT_NAME%>';
import * as actionCreators from './actions';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';


const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => bindActionCreators(actionCreators, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(<%=COMPONENT_NAME%>);
