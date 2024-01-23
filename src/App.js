import { ControlledForm, ControlledFormReducer, UncontrolledForm, UncontrolledFormReducer } from './comp';
import './css/App.css';

function App() {
  return (
    <div className="App">
      < ControlledForm />
      <hr></hr>
      < UncontrolledForm />
      <hr></hr>
      < ControlledFormReducer />
      <hr></hr>
      < UncontrolledFormReducer />
    </div>
  );
}

export default App;
