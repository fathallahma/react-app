import ReactDOM from 'react-dom';

// import ReactJs components
import TaskApp from '../components/taskApp.jsx';

/*
* create React root element and insert it into document
*/
const bootstrapReact =
  () => ReactDOM.render(
            <TaskApp />,
            document.getElementById('insertReactHere')
        );

const bootstrapReacte =
  () => ReactDOM.render(
              <TaskApp />,
              document.getElementById('insertReactHeree')
        );



window.addEventListener('DOMContentLoaded', bootstrapReact);
window.addEventListener('DOMContentLoaded', bootstrapReacte);
