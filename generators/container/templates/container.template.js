import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import <%=COMPONENT_NAME%> from '../../components/<%=COMPONENT_NAME%>';
import * as actionCreators from './actions';


const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({
	actions: bindActionCreators(actionCreators, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(<%=COMPONENT_NAME%>);
