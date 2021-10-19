import './App.css';
import {Grid} from './components/grid'
function App() {
/**
 * grid 10 x 10
 * robot
 * action buttons - turn 90 clockwise, move forward or turn 90 clockwise
 * directions = [[0,1],[1,0],[-1, 0],[0, -1]]
 *              
 */

  return (
    <div className="App">
      <Grid rowCount={10} colCount={10}/>
    </div>
  );
}

export default App;
