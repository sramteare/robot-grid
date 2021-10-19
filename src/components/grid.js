import {useState} from 'react';
const directions = [[0,1],[1,0],[ 0, -1],[-1, 0]];
const dirArrow = ['>', 'v', '<', '^'];
export function Grid ({
    rowCount, colCount
}){
    let [directionIndex, setDirectionIndex] = useState(0);// index in directions array
    let [coordinate, setCoordinate] = useState([0, 0]);
    const move = () =>{
        
        let curDirection = directions[directionIndex];
        let [nextRow, nextCol] = [coordinate[0] + curDirection[0], 
        coordinate[1] + curDirection[1]];
        console.log({nextRow, nextCol, directionIndex})
        if( nextRow === -1 || nextCol === -1 ||
            nextRow === rowCount || nextCol === colCount){
            rotate();
        } else {
            setCoordinate([nextRow, nextCol]);
        }
        
    };
    const rotate = () => {
        setDirectionIndex( (directionIndex + 1) % 4);
    };
    
    
    const getCol = (rIdx) => Array.from({length: colCount}, (_, cIdx)=>(
        <div key={`${rIdx}-${cIdx}`} className="col">{
            coordinate[0] === rIdx && coordinate[1] === cIdx ? 
                <div className="robot">{dirArrow[directionIndex]}</div> : ''
        }</div>
        ));
    const getRows = () => {
        return Array.from({length: rowCount}, (_, i)=>(<div key={i} className="row">
            {getCol(i)}
        </div>));
    }
    return (
        <div id="grid" className="grid"> 
        <main>{getRows()}</main>
        <footer>
            <button onClick={move}>Move</button>
            <button onClick={rotate}>Rotate</button>
        </footer>
        </div>
    )
}