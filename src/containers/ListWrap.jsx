import { connect } from 'react-redux';
import List from '../components/List.jsx';


const mapStateToProps = (state) => ({
  text: state.todos.text
});

export default connect(mapStateToProps)(List);
