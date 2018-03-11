import { connect } from 'react-redux';
import { addToDo } from '../store/actions/actions';
import Textarea from '../components/Textarea.jsx';


const mapStateToProps = (state) => ({
  isEmpty: state.todos
});
const mapDispatchToProps = (dispatch) => ({
  onWriteText: (value) => {
    dispatch(addToDo(value));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Textarea);
