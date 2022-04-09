
//document.getElementById("demo3").innerHTML = "My First JavaScript in Inital----";
import{makeGameBoard,setupBoard, makeBlock,moveKingUp ,moveKingLeft,
  moveKingRight,moveKingDown,getFunction} from './program.js';
import { directions, keys } from './SokobanBase.js'

//makeGameBoard();//Draw game board

document.addEventListener('keydown', (event) => {
    
    switch (event.key) {
      case keys.up:
      case keys.w:
        //if (disable) event.preventDefault();
        event.preventDefault();//prevent page scroll when using arrow keys
        moveKingUp();
        break
      case keys.down:
      case keys.s:
        event.preventDefault();
       moveKingDown();
        break
      case keys.left:
      case keys.a:
        event.preventDefault();
       moveKingLeft();
        break
      case keys.right:
      case keys.d:
        event.preventDefault();
       moveKingRight();
        break
      default:
       
    }
    let x=getFunction();
    if(x==6){
      makeGameBoard();
    }
   
  })
  
 
  document.getElementById("restart").addEventListener("click",  makeGameBoard);
  



