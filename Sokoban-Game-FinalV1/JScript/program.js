
//document.getElementById("demo2").innerHTML = "My First JavaScript in program----";

import {tileMap01,kingPlasment,Tiles,Entities}from './SokobanBase.js';
//



export{makeGameBoard,setupBoard, makeBlock, moveKingUp ,moveKingLeft,moveKingRight,moveKingDown, getFunction }

  
const boardElement = document.getElementById('board');

//document.getElementById("demo2").innerHTML = "Total Your goal are: 0"+i;
//Get Array of 
const boardMap=makeGameBoard();//Its required,but it generate generate board in the beginng only


function setupBoard(boardBlockHeight, boardBlockWidth) {
  boardElement.innerHTML = "";//clear board
  const blockHeight = 50;
  const blockWidth = 50;
  const boardHeight = boardBlockHeight * blockHeight;
  const boardWidth = boardBlockWidth * blockWidth;

  boardElement.style.width = boardWidth + "px";
  boardElement.style.height = boardHeight + "px";

  //reset kingPlasment
  kingPlasment.posY = -1;
  kingPlasment.posX = -1;
}

function makeBlock(cssColorClass, idValue) {
  let block = document.createElement('div');
  block.id = idValue;// for example Y0 X0 for first element
  //block.setAttribute("id", idValue);  
  //block.classList.add('block');
  //block.classList.add(cssColorClass);
  block.className = 'block ' + cssColorClass;// for example bolckgreen
  
  boardElement.appendChild(block);
}
//makeGameBoard();
function makeGameBoard() {
 
  //document.getElementById("demo").innerHTML = "My First JavaScript in makeGameBoard----";
  
  setupBoard(16, 19);

  for (let yPos = 0; yPos < 16; yPos++) {

      for (let xPos = 0; xPos < 19; xPos++) {

         const colorCss = tileMap01[yPos][xPos];//3-dimension array,get just color from array
        
         
          if (colorCss.includes('kingIcon')) {//in [] des not readed!
              kingPlasment.posY = yPos;
              kingPlasment.posX = xPos;
            // document.getElementById("demo").innerHTML = "Hellow i am in loop" ;
          }
          makeBlock(colorCss, "Y" + yPos + "X" + xPos);
          
          
        }
  }

 
}
document.getElementById("draw").addEventListener("click",  makeGameBoard);
//Added

function moveKingUp() {
 // document.getElementById("demo").innerHTML = "My First JavaScript inmoveKingUp()----";
  if (kingPlasment.posY === -1) {//if there is no king placed
      return;//exit function
  }

  const kingDiv = document.getElementById("Y" + kingPlasment.posY + "X" + kingPlasment.posX);
   const kingsNewPosY = kingPlasment.posY - 1;
   // Don't move if you meet a wall
   const x=tileMap01[kingsNewPosY][kingPlasment.posX];//
   if (x.includes(Tiles.Wall)) {
    return
  }
  //Do not move if
 /* 
  if(spaceDiv3.className.includes("block tile-wall") ){
   return;
  }*/
  
//if there a block X-constant & Y-changed
  const blckDiv= document.getElementById("Y" + kingsNewPosY + "X" + kingPlasment.posX);
  //const blockPos=tileMap01[kingsNewPosY][kingPlasment.posX];  
  const spaceDiv=document.getElementById("Y" + (kingsNewPosY-1 )+ "X" + kingPlasment.posX);
  //const spacePos=tileMap01[(kingsNewPosY-1)][kingPlasment.posX]; 
  const spaceDiv2=document.getElementById("Y" + (kingsNewPosY-2 )+ "X" + kingPlasment.posX);
  const spaceDiv3=document.getElementById("Y" + (kingsNewPosY-4 )+ "X" + kingPlasment.posX);
  
  //First alogrithm 
  if(blckDiv.className.includes("block entity-block")){//if the player meet a block
     if(spaceDiv.className.includes("block tile-space")){//if there a space after block
      
    $(document).ready(function(){//change block to space
      $( blckDiv).removeClass("entity-block");
      $( blckDiv).addClass("tile-space");    
    });
    $(document).ready(function(){//change space to block
      $( spaceDiv).removeClass("tile-space");
      $(spaceDiv).addClass("entity-block");    
    });//2 blocks above player with space above all
        //2nd alogrithm
          
         }//End second if
      }//end if first

      //2nd alogrithm
      
      if(blckDiv.className.includes("block entity-block")){//if the player meet a block
        if(spaceDiv.className.includes("block entity-block")){//if there a block after block,spaceDiv is become block now
          if(spaceDiv2.className.includes("block tile-space")){//if there a space after 2nd block
       $(document).ready(function(){//change block to space
         $( blckDiv).removeClass("entity-block");
         $( blckDiv).addClass("tile-space");    
       });
       $(document).ready(function(){//change space to block
         $( spaceDiv2).removeClass("tile-space");
         $(spaceDiv2).addClass("entity-block");    
       });
             }//third if
            }//End second if
         }//end if first

           //3nd alogrithm
     
      if(blckDiv.className.includes("block entity-block")){//if the player meet a block
        if(spaceDiv.className.includes("block entity-block")){//if there a block after block,spaceDiv is become block now
          if(spaceDiv2.className.includes("block tile-space")){//if there a space after 2nd block
       $(document).ready(function(){//change block to space
         $( blckDiv).removeClass("entity-block");
         $( blckDiv).addClass("tile-space");    
       });
       $(document).ready(function(){//change space to block
         $( spaceDiv3).removeClass("tile-space");
         $(spaceDiv3).addClass("entity-block");    
       });
             }//third if
            }//End second if
            
         }//end if first
       
 
  const kingMoveToDiv = document.getElementById("Y" + kingsNewPosY + "X" + kingPlasment.posX);

  kingDiv.classList.toggle('kingIcon');
  kingMoveToDiv.classList.toggle( 'kingIcon');

  kingPlasment.posY = kingPlasment.posY - 1;
}
document.getElementById("hellobutton").addEventListener("click",  moveKingUp);

//End move UP

function moveKingLeft() {
  // document.getElementById("demo").innerHTML = "My First JavaScript  moveKingLeft()----";
   if (kingPlasment.posX === -1) {//if there is no king placed
       return;//exit function
   }
 
   const kingDiv = document.getElementById("Y" + kingPlasment.posY + "X" + kingPlasment.posX);
   const kingsNewPosX = kingPlasment.posX - 1;
   //Take block position which was player position, -x to left
   const blockDiv = document.getElementById("Y" + kingPlasment.posY + "X" + kingsNewPosX);
   //Take space position
   const spaceDiv = document.getElementById("Y" + kingPlasment.posY + "X" + (kingsNewPosX-1));

   if(blockDiv.className.includes("block entity-block")){
    if(spaceDiv.className.includes("block tile-space")){
    $(document).ready(function(){//change block to space
      $( blockDiv).removeClass("entity-block");
      $( blockDiv).addClass("tile-space");    
    });
    $(document).ready(function(){//change space to block
      $( spaceDiv).removeClass("tile-space");
      $(spaceDiv).addClass("entity-block");    
    });
     }
   }//End first if
   //const kingsNewPosX = kingPlasment.posX - 1;
    // Don't move if you meet a wall
    const x=tileMap01[kingPlasment.posY][kingsNewPosX];//
    if (x.includes(Tiles.Wall)) {
     return
   }
  
   const kingMoveToDiv = document.getElementById("Y" +  kingPlasment.posY + "X" +kingsNewPosX);
 
   kingDiv.classList.toggle('kingIcon');
   kingMoveToDiv.classList.toggle( 'kingIcon');
 
   kingPlasment.posX = kingPlasment.posX - 1;
 }
 document.getElementById("left").addEventListener("click",  moveKingLeft);
 //End move left

 function moveKingRight() {
  
  //document.getElementById("demo2").innerHTML = "Total Your goal are: = "+i;
  //document.getElementById("demo").innerHTML = "My First JavaScript  moveKingRightt()----";
   if (kingPlasment.posX === -1) {//if there is no king placed
       return;//exit function
   }
 
   const kingDiv = document.getElementById("Y" + kingPlasment.posY + "X" + kingPlasment.posX);
  
   const kingsNewPosX = kingPlasment.posX + 1;
    // Don't move if you meet a wall
    const x=tileMap01[kingPlasment.posY][kingsNewPosX];//
    if (x.includes(Tiles.Wall)) {
     return
   }
  
   const kingMoveToDiv = document.getElementById("Y" +  kingPlasment.posY + "X" +kingsNewPosX);
   //Added
    //Take block position which was player position, +x to right
    const blockDiv = document.getElementById("Y" + kingPlasment.posY + "X" + kingsNewPosX);
    //Take space position
    const spaceDiv = document.getElementById("Y" + kingPlasment.posY + "X" + (kingsNewPosX+1));
    //Take Block-Done position
    const bDoneDiv = document.getElementById("Y" + kingPlasment.posY + "X" + (kingsNewPosX+2));

    //First alogrithm for push block forward
    if(blockDiv.className.includes("block entity-block")){
      if(spaceDiv.className.includes("block tile-space")){
      $(document).ready(function(){//change block to space
        $( blockDiv).removeClass("entity-block");
        $( blockDiv).addClass("tile-space");    
      });
      $(document).ready(function(){//change space to block
        $( spaceDiv).removeClass("tile-space");
        $(spaceDiv).addClass("entity-block");    
      });
       }
     }//End first if

     //2nd Alogrithm for first goal
     if(blockDiv.className.includes("block entity-block")){
      if(spaceDiv.className.includes("block tile-goal")){
        if(bDoneDiv.className.includes(" entity-block-goal")){//Does  never incresa?
         // ++i;//It does not work well
      $(document).ready(function(){//change block to space
        $( blockDiv).removeClass("entity-block");
        $( blockDiv).addClass("tile-space"); 
        
         });
      $(document).ready(function(){//change space to block
       $( spaceDiv).removeClass("tile-goal");
       $(spaceDiv).addClass("entity-block-goal");  
       //if(i==5){++i}; 
       //++i; //does not work?
      });
        }//End 3rd if
       }//End if second
     }//End first if
     
    //2nd Alogrithm for 2nd goal-first stage
    if(blockDiv.className.includes("block entity-block")){
      if(spaceDiv.className.includes("block tile-goal")){
        if(bDoneDiv.className.includes("block tile-goal")){//It work properly
         
      $(document).ready(function(){//change block to space
        $( blockDiv).removeClass("entity-block");
        $( blockDiv).addClass("tile-space");  
         });
      $(document).ready(function(){//change space to block
       $( spaceDiv).removeClass("tile-goal");
       $(spaceDiv).addClass("entity-block");    
      });
      
        }//End 3rd if
       }//End if second
     }//End first if

     //Complete 2nd Alogrithm for 2nd goal-2nd stage
    if(blockDiv.className.includes("block entity-block")){//It does not work properly, just 6th block increase  before goal?!
      if(spaceDiv.className.includes("block tile-goal")){
        if(bDoneDiv.className.includes("block tile-wall")){
         
      $(document).ready(function(){//change block to space
        $( blockDiv).removeClass("entity-block");
        $( blockDiv).addClass("tile-goal");  
         });
      $(document).ready(function(){//change space to block
       $( spaceDiv).removeClass("tile-goal");
       $(spaceDiv).addClass("entity-block-goal"); 
     
      });
      
        }//End 3rd if
       }//End if second
     }//End first if

     //Extra alogrithm for 6 box

    
 


 

   kingDiv.classList.toggle('kingIcon');
   kingMoveToDiv.classList.toggle( 'kingIcon');
 
   kingPlasment.posX = kingPlasment.posX + 1;

   //Make method return
   
 }//End function
 document.getElementById("right").addEventListener("click",  moveKingRight);
 //End move right

 function moveKingDown() {
   //document.getElementById("demo").innerHTML = "My First JavaScript moveKingDown()----";
   if (kingPlasment.posY === -1) {//if there is no king placed
       return;//exit function
   }
 
   const kingDiv = document.getElementById("Y" + kingPlasment.posY + "X" + kingPlasment.posX);
   //document.getElementById("demo2").innerHTML ="Y" + kingPlasment.posY + "X" + kingPlasment.posX;
   const kingsNewPosY = kingPlasment.posY+ 1;
    // Don't move if you meet a wall
    const x=tileMap01[kingsNewPosY][kingPlasment.posX];
    if (x.includes(Tiles.Wall)) {
     return
   }
     
   const kingMoveToDiv = document.getElementById("Y" + kingsNewPosY + "X" + kingPlasment.posX);
   //Added
   //if there a block X-constant & Y-changed
  const blckDiv= document.getElementById("Y" + kingsNewPosY + "X" + kingPlasment.posX);
  //const blockPos=tileMap01[kingsNewPosY][kingPlasment.posX];  
  const spaceDiv=document.getElementById("Y" + (kingsNewPosY+1 )+ "X" + kingPlasment.posX);

  //First alogrithm 
  if(blckDiv.className.includes("block entity-block")){//if the player meet a block
    if(spaceDiv.className.includes("block tile-space")){//if there a space after block
     
   $(document).ready(function(){//change block to space
     $( blckDiv).removeClass("entity-block");
     $( blckDiv).addClass("tile-space");    
   });
   $(document).ready(function(){//change space to block
     $( spaceDiv).removeClass("tile-space");
     $(spaceDiv).addClass("entity-block");    
   });//2 blocks above player with space above all
       //2nd alogrithm
         
        }//End second if
     }//end if first
 
   kingDiv.classList.toggle('kingIcon');
   kingMoveToDiv.classList.toggle( 'kingIcon');
 
   kingPlasment.posY = kingPlasment.posY + 1;
 }
 document.getElementById("down").addEventListener("click",  moveKingDown);

 //End moveKingDown

 function getFunction() {//Coun the no. of goal
  let i=0;
 for (let yPos = 9; yPos <= 11; yPos++) {

    for (let xPos = 16; xPos <= 17; xPos++) {
           
       const Div = document.getElementById("Y" + yPos + "X" +xPos);
      
        if (Div.className.includes("entity-block-goal")) {//in [] des not readed!
           i++;
          // document.getElementById("demo").innerHTML = "Hellow i am in loop" ;
        }  
                
      }//End for X
 }//End for Y
  document.getElementById("demo2").innerHTML = "Total Your goal are: = "+i;
  return i;            
}//End getFunction

/*function hello() {
  alert('Hello');
  }
  document.getElementById("hellobutton").addEventListener("click",  hello);*/