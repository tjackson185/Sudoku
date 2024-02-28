let NumbersPlaced = [];
let NoteState = false;
let MenuState = false;
let rowCheckNum = [false,false,false,false,false,false,false,false,false];
let arrSetting = [];
let arrGmDigits = [];
let gmDigits = [];
let seconds,minutes,hours,Errors;
let winnertext = false;
let speakerState = true;
let helpState = false;
let timeCompleted = "";

let GameLevel = {
    easy: false,
    medium: false,
    hard: false,
    newgame: false,
    selectGameLevel: function(input){
       switch(input){
        case "easy": 
              this.medium = false;
              this.hard = false;
              this.easy = true;             
            break;
        case "medium":
               this.easy = false;
               this.hard = false;
               this.medium = true;
            break;
        case "hard":
               this.easy = false;
               this.medium = false;
               this.hard = true;
            break;
        default:
           this.medium = false;             
           this.hard = false;             
           this.easy = true;
        }
    },
    StartOver: function(){
        this.newgame = true;
    }
};

let GAMELEVEL = new GameLevel.selectGameLevel('easy');
let GAMEBOARD_DIGITS;

let arrRow =[
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0] ]; 

let arrColumn =[
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0] ]; 

let arrSection =[
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0] ]; 

let arrConfirmBoard =[
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0] ]; 


let gridOne = [false,false,false,false,false,false,false,false,false];
let gridTwo = [false,false,false,false,false,false,false,false,false];
let gridThree = [false,false,false,false,false,false,false,false,false];
let gridFour = [false,false,false,false,false,false,false,false,false];
let gridFive = [false,false,false,false,false,false,false,false,false];
let gridSix = [false,false,false,false,false,false,false,false,false];
let gridSeven = [false,false,false,false,false,false,false,false,false];
let gridEight = [false,false,false,false,false,false,false,false,false];
let gridNine = [false,false,false,false,false,false,false,false,false];

let gridSectionOne = [new gridPos(0,0),new gridPos(1,0),new gridPos(2,0),new gridPos(0,1),new gridPos(1,1),new gridPos(2,1),new gridPos(0,2),new gridPos(1,2),new gridPos(2,2)];
let gridSectionTwo = [new gridPos(3,0),new gridPos(4,0),new gridPos(5,0),new gridPos(3,1),new gridPos(4,1),new gridPos(5,1),new gridPos(3,2),new gridPos(4,2),new gridPos(5,2)];
let gridSectionThree = [new gridPos(6,0),new gridPos(7,0),new gridPos(8,0),new gridPos(6,1),new gridPos(7,1),new gridPos(8,1),new gridPos(6,2),new gridPos(7,2),new gridPos(8,2)];

let gridSectionFour = [new gridPos(0,3),new gridPos(1,3),new gridPos(2,3),new gridPos(0,4),new gridPos(1,4),new gridPos(2,4),new gridPos(0,5),new gridPos(1,5),new gridPos(2,5)];
let gridSectionFive = [new gridPos(3,3),new gridPos(4,3),new gridPos(5,3),new gridPos(3,4),new gridPos(4,4),new gridPos(5,4),new gridPos(3,5),new gridPos(4,5),new gridPos(5,5)];
let gridSectionSix = [new gridPos(6,3),new gridPos(7,3),new gridPos(8,3),new gridPos(6,4),new gridPos(7,4),new gridPos(8,4),new gridPos(6,5),new gridPos(7,5),new gridPos(8,5)];

let gridSectionSeven = [new gridPos(0,6),new gridPos(1,6),new gridPos(2,6),new gridPos(0,7),new gridPos(1,7),new gridPos(2,7),new gridPos(0,8),new gridPos(1,8),new gridPos(2,8)];
let gridSectionEight = [new gridPos(3,6),new gridPos(4,6),new gridPos(5,6),new gridPos(3,7),new gridPos(4,7),new gridPos(5,7),new gridPos(3,8),new gridPos(4,8),new gridPos(5,8)];
let gridSectionNine = [new gridPos(6,6),new gridPos(7,6),new gridPos(8,6),new gridPos(6,7),new gridPos(7,7),new gridPos(8,7),new gridPos(6,8),new gridPos(7,8),new gridPos(8,8)];

let gridSet = [gridSectionOne,gridSectionTwo,gridSectionThree,gridSectionFour,gridSectionFive,gridSectionSix,gridSectionSeven,gridSectionEight,gridSectionNine];

function GmBoard(_col,_row,_val){
    this.col = _col;
    this.row = _row;
    this.val = _val;
}

function gridPos(col,row){
    this.col = col;
    this.row = row;
}

function ActiveDigitPlaced(Id,val){
    this.id = Id;
    this.value = val;
}

function startDisplay(){   
    //mkWinnerDisplay("1:00");
    //processStorage();
    document.body.style.height = window.screen.height;
    document.body.style.width = window.screen.width;
    buildGmBoard();
    document.getElementById('level').innerHTML = 'Easy';
    
}

function renewDisplay(){
    const myCollection = document.querySelectorAll("[data-game-cell]");    
        for (let i = 0; i < myCollection.length; i++) {
            myCollection[i].remove();
        }
    if(winnertext == true){
        document.getElementById('winnerDisplay').remove();
        winnertext = false;
    }
     for(let reset=0;reset<=8;reset++){
         arrColumn[reset] = [0,0,0,0,0,0,0,0,0];
         arrRow[reset] = [0,0,0,0,0,0,0,0,0];
         arrSection[reset] = [0,0,0,0,0,0,0,0,0];
     }
    gameTimeing.reset();
    arrSetting = [];
    arrGmDigits = [];
    gmDigits = [];
    GAMEBOARD_DIGITS = "";
    timeCompleted = "";
    rowCheckNum = [false,false,false,false,false,false,false,false,false];
    buildGmBoard();
}

function buildGmBoard(){
    GAMEBOARD_DIGITS = getGmBoardNumbers();
    let confirmed = true;
    do{
        for(let i=0;i<=GAMEBOARD_DIGITS.length - 1;i++){
            let isDigitVisable = false;
            let c,r,val;
            c = GAMEBOARD_DIGITS[i].col;
            r = GAMEBOARD_DIGITS[i].row;
            val = GAMEBOARD_DIGITS[i].val;
            for(let col of processGameLevel()){
                if(col == c){
                isDigitVisable = true;
                break;
                }
            }
            if(isDigitVisable == true){
               val = GAMEBOARD_DIGITS[i].val;
            }else if(isDigitVisable == false){val = "";}
            mkdiv(c,r,val);
            if(val == ""){
                arrConfirmBoard[r][c] = 0;
            }else{arrConfirmBoard[r][c] = val;}
            
        }
         confirmed = confirmGameBoard();
        if(confirmed == false){
            confirmed = false;
            const myCollection = document.querySelectorAll("[data-game-cell]");    
            for (let i = 0; i < myCollection.length; i++) {
                myCollection[i].remove();
            }
        }

    }while(confirmed == false)/**/

        gameTimeing.stop();
        gameTimeing.reset();
        gameTimeing.start();
}

let gameTimeing = {
    start: function(){      
        this.interval = setInterval(updateTimer,1000);
    },
    stop: function(){
        clearInterval(this.interval);
    },
    reset: function(){
        let time = document.getElementById('timer').innerHTML = "00:00:00";
        seconds = "00";
        minutes = "00";
        hours = "00";
        Errors = 0;
    }

}

function updateTimer(){
    let time = document.getElementById('timer');
    if(seconds == 59){
        seconds = 0;
        if(minutes == 59){
            minutes = 0;
            if(hours == 24){hours = 0;}else{hours++;if(hours <= 9){hours = "0" + hours;}}
        }else{minutes++;if(minutes <= 9){minutes = "0" + minutes;}}
    }else{seconds++;}
    if(seconds <= 9){seconds = "0" + seconds;}
    time.innerHTML = hours + ":" + minutes + ":" + seconds;
}
function getRandomNumber(){
 //get random number between 0 to 8  
 return Math.floor(Math.random() * 9); 
}
function getRandomNumBetween(min,max){
    //get random number between start to end  
    return Math.floor(Math.random() * (max - min)) + min; 
}

function confirmGameBoard(){
    let isConfirmed = false;
    let rowCount = 0;
        for(let r=0;r<=8;r++){
            
            for(let c=0;c<=8;c++){
                if(arrConfirmBoard[r][c] == 0 ){
                    rowCount++;
                }
            }
            if(rowCount >= 9){
                for(let i=0;i<=8;i++){
                    arrConfirmBoard[i] = [0,0,0,0,0,0,0,0,0]; 
                }       
                return isConfirmed;
            }
            rowCount = 0;
        }
        for(let i=0;i<=8;i++){
            arrConfirmBoard[i] = [0,0,0,0,0,0,0,0,0]; 
        } 
        isConfirmed = true;
    return isConfirmed;
}

function processGameLevel(){
    let colSelected = [];
    if(GAMELEVEL.easy == true){
        let totalShown = getRandomNumBetween(3,5);        
        for(let i=0; i<=totalShown;i++){
            colSelected[i] = getRandomNumber();
        }
    }else if(GAMELEVEL.medium == true){
        let totalShown = getRandomNumBetween(3,4);
        for(let i=0; i<=totalShown;i++){
            colSelected[i] = getRandomNumber();
        }
    }else if(GAMELEVEL.hard == true){
        let totalShown = getRandomNumBetween(2,3);
        for(let i=0; i<=totalShown;i++){
            colSelected[i] = getRandomNumber();
        }
    }
    return colSelected;
}


function getGmBoardNumbers(){
    try{
        for(let r=0;r<=8;r++){ 
            let control = false;
              
                for(let c=0;c<=8;c++){  
                    let val = chkNum(c,r);   
                    if(val == 0){c = -1;}         
                   
                   if(val != 0){
                    arrGmDigits.push(val);
                    arrRow[r][c] = val;
                    arrColumn[c][r] = val;
                    arrSection[getSection(c,r)].shift();
                    arrSection[getSection(c,r)].push(val);
                   }

                } 
            rowCheckNum = [false,false,false,false,false,false,false,false,false];
        }      
            for(let row=0;row<=8;row++){
                for(let col=0;col<=8;col++){
                    arrSetting.push(new GmBoard(col,row,arrRow[row][col]));  
                }
            }
             gmDigits.push(arrGmDigits);
        return arrSetting; 
    }
    catch(e){
        console.log(e.message);
    }
}
//Get random value from 1 to 9 that has only been used more than once return value
function chkNum(col,row){    
    let val; 
    let control = false;
    do{
        val = Math.floor(Math.random() * 9) + 1;       
        let numAvailable =compareArray(compareArrayValues(col,row),getRowNumbersAvailable());                
                    
       if(rowCheckNum[val-1] == false){           
           if(checkNumberUsage(numAvailable,val) == true ){
                rowCheckNum[val-1] = true;
                return val;
           }else if(checkNumberUsage(numAvailable,val) == false )
           {
               if(numAvailable.length <= 0){
               resetRow(col,row);   
               return 0;                 
               }

            control = true;
           } /* *//**//**/
       }else{control = true}   
    
   }while(control == true);
 
}

function resetRow(col,row){
    let resetRow = 0;
    arrRow[row] = [0,0,0,0,0,0,0,0,0];
    for(let r=0;r<=col - 1;r++){
         arrColumn[r][row] = 0;            
        }
        arrSection =[
            [0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0] ]; 
    for(let r=0;r<=8;r++){
        for(let c=0;c<=8;c++){
            if(c >=0 && c <=2 && arrRow[r][c] != 0){
                arrSection[getSection(c,r)].shift();
                arrSection[getSection(c,r)].push(arrRow[r][c]);
            }
            if(c >=3 &&c <=5 && arrRow[r][c] != 0){
                arrSection[getSection(c,r)].shift();
                arrSection[getSection(c,r)].push(arrRow[r][c]);
            }     
            if(c >=6 && c <=8 && arrRow[r][c] != 0){
                arrSection[getSection(c,r)].shift();
                arrSection[getSection(c,r)].push(arrRow[r][c]);
            }                  
            
        }
    }
    rowCheckNum = [false,false,false,false,false,false,false,false,false];
}


//Accepts Column an row to determine section 
function getSection(col,row){
    let section;
     for(let i=0;i<=gridSet.length-1;i++){
         for(let x=0;x<=gridSet[i].length-1;x++){
             if(gridSet[i][x].col == col && gridSet[i][x].row == row){
                 section = i;
                 break;
             }
         }
     }
     return section;
 }     

function compareArrayValues(col,row){
    let sectionNumbers = [];
    let rowNumbers = [];
    let ColumnNumbers = [];
    let tempList = [];
    let comparedList = [];
    let sectionValues = [false,false,false,false,false,false,false,false,false];
    let RowValues = [false,false,false,false,false,false,false,false,false];
    let ColumnValues = [false,false,false,false,false,false,false,false,false];
    
        for(let section of arrSection[getSection(col,row)]){
            if(section != 0 ){
                sectionValues[section -1] = true;
            }
        }
        sectionNumbers = getNumbersAvailable(sectionValues);
    
        for(let Row of arrRow[row]){
            if(Row != 0){
                RowValues[Row -1] = true;
            }        
        }
        rowNumbers = getNumbersAvailable(RowValues);
    
        for(let Column of arrColumn[col]){
            if(Column != 0){
                ColumnValues[Column -1] = true;
            }
        }
        ColumnNumbers = getNumbersAvailable(ColumnValues);
    
        tempList = compareArray(rowNumbers,ColumnNumbers);
        comparedList = compareArray(tempList,sectionNumbers);
     
      return comparedList
    }
    
    //Accepts two arrays and compares like values and returns array of like values
    function compareArray(arrOne,arrTwo){
        let nextArray = [];
        for(let comOne of arrOne){
            for(let comTwo=0;comTwo<=arrTwo.length-1;comTwo++){
                if(comOne == arrTwo[comTwo]){
                    nextArray.push(comOne);
                }
            }
        }
        return nextArray;
    }
    //Accepts an array & a value, checks for value in array return boolean
    function checkNumberUsage(arr,Val){
        let isNumInUses = false;
        for(let numVal of arr){
            if(numVal == Val){
              isNumInUses = true;
            }
        }
        return isNumInUses;
    }
    //Determines value from 1 to 9 not used yet in row return array of unused digits
    function getRowNumbersAvailable(){
        let numbersAvailable = [];
        for(let i=0;i<=8;i++){
            if(rowCheckNum[i] == false){            
                numbersAvailable.push(i+1);
            }
        }
        return numbersAvailable;
    }
    
    function getNumbersAvailable(arrCheckNum){
        let numbersAvailable = [];
        for(let i=0;i<=8;i++){
            if(arrCheckNum[i] == false){            
                numbersAvailable.push(i+1);
            }
        }
        return numbersAvailable;
    }

function digitConvert(digit){
    let val;
      if(digit==1){val="one"; }
      if(digit==2){val="two"; }
      if(digit==3){val="three"; }
      if(digit==4){val="four"; }
      if(digit==5){val="five"; }
      if(digit==6){val="six"; }
      if(digit==7){val="seven"; }
      if(digit==8){val="eight"; }
      if(digit==9){val="nine"; }
   
  return val;
}

function processStorage(){
    //localStorage.removeItem("game_scores"); 
    let newScore; 
    let score = localStorage.game_scores;
    let arrScores = [];
    score = score.slice(9,score.length);
    newScore = score.split(";");
    console.table(newScore);
    newScore.sort(function (a,b) {
        return new Date(b.time) - new Date(a.time);
    });/**/
   
    console.table(newScore); 

    for(let x of newScore){
        if(x != ""){
        let scoredata = JSON.parse(x);           
        
          if(scoredata.time == timeCompleted && scoredata.error == Errors){
            arrScores.unshift("<span style='background: yellow; color: black;'>Date: " + scoredata.date + " Time: " + scoredata.time + " Level: " + scoredata.level + " Mistakes: " + scoredata.error + "</span>");
          }else{
              arrScores.unshift("<span>Date: " + scoredata.date + " Time: " + scoredata.time + " Level: " + scoredata.level + " Mistakes: " + scoredata.error + "</span>");
          }
              
          }else{break;}
          
       
    }
    const scoreList = document.getElementById("scoresList");
    for(let arr of arrScores){
        scoreList.innerHTML += arr;
    }

    /*console.log(scoredata)*/
}

function updateStorage(){
    if (typeof(Storage) !== "undefined") {
        const d = new Date;
        let level = document.getElementById('level').innerHTML;
        let date = d.getMonth()  + "/" + d.getDate() + "/" + d.getFullYear();
        let time = hours + ":" + minutes + ":" + seconds;
        let gameResults = localStorage.game_scores;
            gameResults += '{"date":"' + date + '"' + ',"time":"' + time + '"' + ',"level":"' + level + '"' + ',"error":"' + Errors + '"}' + ";";    
               
        // Store
        localStorage.setItem("game_scores",gameResults);
        
        //document.getElementById("result").innerHTML = localStorage.getItem("firstname") + " " + localStorage.getItem("lastname");
      } else {
        document.getElementById("scoresList").innerHTML = "Sorry, your browser does not support Web Storage...";
       //alert("Sorry, your browser does not support Web Storage...")
      }
}

function clearScores(){
    if(typeof(Storage) !== "undefined"){
        localStorage.removeItem('game_scores');
        document.getElementById('scoresList').remove;
    } else {
        document.getElementById("scoresList").innerHTML = "Sorry, your browser does not support Web Storage...";
      }
}

function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
  }

function checkForWin(){
    const myCollection = document.querySelectorAll("[data-game-cell]");
    let mySoundFX = new sound("/sound/BELL11.WAV")
    let isWinner = false;
    let winCount = 0;
    
    for (let i = 0; i < myCollection.length; i++) {
        if(myCollection[i].innerHTML != ""){
            for(let n=1;n<=9;n++){
                if(myCollection[i].innerHTML == n){
                    winCount++;
                }
            }
        }
    }
    if(winCount == 81){
        isWinner = true;
        winnertext = true;
        gameTimeing.stop();
        timeCompleted = hours + ":" + minutes + ":" + seconds;
        updateStorage();
        delay(1000).then(() => mkWinnerDisplay(timeCompleted),mySoundFX.play());
       
       
    }

    return isWinner;
}

function help(){
    let mySoundFX = new sound("/sound/POP002.WAV");
    const parent = document.getElementById("help");
    if(helpState == false){
        helpState = true;
        mkHelpDiv();
    }else if(helpState == true){
        helpState = false;
        parent.remove();
    }

    
    if(speakerState == true){mySoundFX.play();}    

}

function exitHelp(id){
    let mySoundFX = new sound("/sound/STAPLER.WAV");
    const parent = document.getElementById(id);
    helpState = false;
    if(speakerState == true){mySoundFX.play();} 
    parent.remove();
}

function toggleSpeaker(){
    if(speakerState == true){
     speakerState = false;
     document.getElementById('speaker').innerHTML = "🔇";
    }
    else
    if(speakerState == false){
    speakerState = true;
    document.getElementById('speaker').innerHTML = "🔈";
    }
}

function toggleNotes(){
    let mySoundFX = new sound("/sound/POP002.WAV")
    let note = document.getElementById('note');
    let keys = document.getElementById('NumbersContainer')
    if(NoteState == false){
        NoteState = true;
        note.style.border = "solid rgb(29, 150, 4) 1px";
        keys.style.border = "double rgb(29, 0, 194) 3px";
    }else if(NoteState == true){
        NoteState = false;
        note.style.border = "solid black 1px";
        keys.style.border = "";
    }
    if(speakerState == true){mySoundFX.play();}

}

function undoDigitPlacement(){
    let mySoundFX = new sound("/sound/POP002.WAV")
    if(NumbersPlaced.length != 0){
        document.getElementById(NumbersPlaced[0].id).innerHTML = "";
        document.getElementById(NumbersPlaced[0].id).style = "";
        document.getElementById(NumbersPlaced[0].id).style.background = "white";
        NumbersPlaced.shift();
    }
    if(speakerState == true){mySoundFX.play();}

}

function eraseDigit(){
    const myCollection = document.querySelectorAll("[data-game-cell]");
    let mySoundFX = new sound("/sound/POP002.WAV")
    for (let i = 0; i < myCollection.length; i++) {
        if(myCollection[i].style.background == "lightblue"){
            myCollection[i].style.color = "";
            myCollection[i].innerHTML = "";
        }
    }
    if(speakerState == true){mySoundFX.play();}

}

function assessNotes(id,number){
    const myCollection = document.querySelectorAll("[data-game-cell]");    
    let subId = id.substr(5);
    let col = subId.substr(0,1);
    let row = subId.substr(2);
    let section = getSection(col,row);

    for (let i = 0; i < myCollection.length; i++) {
        for(let x=0;x<=8;x++){
            if(myCollection[i].id == "node-" + x + "-" + row +"" || 
               myCollection[i].id == "node-" + col + "-" + x +"" /*&& 
               section == getSection(x,row) || section == getSection(col,x)*/){

               const myNotesCollection = myCollection[i].querySelectorAll("[data-note-cell]");
                    for(let noteValue of myNotesCollection){
                        if(noteValue.innerHTML == number /*&& noteValue.id == noteName + "-note-" + digitConvert(number)*/){
                            noteValue.remove();
                        }
                    }
            }else{
                let noteName = myCollection[i].id;
                let noteId = noteName.substr(5);
                let noteCol = noteId.substr(0,1);
                let noteRow = noteId.substr(2);
                if(section == getSection(noteCol,noteRow)){
                const myNotesCollection = myCollection[i].querySelectorAll("[data-note-cell]");
                for(let noteValue of myNotesCollection){
                    if(noteValue.innerHTML == number /*&& noteValue.id == noteName + "-note-" + digitConvert(number)*/){
                        noteValue.remove();
                    }
                }
            }
            } 
        }
        
    }
}

function processDigitInput(id,number){
    let isNumberCorrect = false;
    let subId = id.substr(5);
    let col = subId.substr(0,1);
    let row = subId.substr(2);
    for(let x of GAMEBOARD_DIGITS){
        if(x.col == col && x.row == row){
            if(x.val == number){
                isNumberCorrect = true;
                break;
            }
        }
    }
    return isNumberCorrect;
}

function getDigitPressed(number){
    const myCollection = document.querySelectorAll("[data-game-cell]");
    let mySoundFX = new sound("/sound/STAPLER.WAV")
    if(NoteState == false){
        for (let i = 0; i < myCollection.length; i++) {
            if(myCollection[i].style.background == "lightblue"){
                if(processDigitInput(myCollection[i].id,number) == true){
                    myCollection[i].style = "color: rgb(0,0,255)"
                    myCollection[i].innerHTML = number;
                    assessNotes(myCollection[i].id,number);
                    checkForWin();
                }else{
                    Errors++;
                    myCollection[i].style = "background: white; color: red; "
                    myCollection[i].innerHTML = number;
                }

                NumbersPlaced.unshift(new ActiveDigitPlaced(myCollection[i].id,number));
            }
        }
    }else if(NoteState == true){
        for (let i = 0; i < myCollection.length; i++) {
            if(myCollection[i].style.background == "lightblue"){
                const myNotesCollection = myCollection[i].querySelectorAll("[data-note-cell]");                
                let noteDuplicate = false
                    for(let x  of myNotesCollection){    
                        if(x.innerHTML == number){
                            noteDuplicate = true;
                            x.remove();
                        }
                    }
                    /**/
                    if(noteDuplicate == false){
                       mkspan(myCollection[i].id,number);
                    }
            }
        }    
    }
    if(speakerState == true){mySoundFX.play();}

}

function divSelected(id){
  const myCollection = document.querySelectorAll("[data-game-cell]");
  let mySoundFX = new sound("/sound/STREAK02.WAV")
    for (let i = 0; i < myCollection.length; i++) {
        if(myCollection[i].style.background == "lightblue"){
            myCollection[i].style.background = "white";
            break;
        }
    }
        let cell = document.getElementById(id);
        let hasSpan = cell.querySelector("[data-note-cell]")
               
        if(cell.style.background == "white" && cell.innerHTML == ""){
            cell.style.background = "lightblue";
        }else if(cell.style.background == "white" && hasSpan != null){
            cell.style.background = "lightblue";
        }else if(cell.style.background == "white" && cell.style.color == "red"){
            cell.style.background = "lightblue";}
        else if(cell.style.background == "lightblue"){
            cell.style.background = "white";
        }
        if(speakerState == true){mySoundFX.play();}

}

function openMenu(){
    let mySoundFX = new sound("/sound/STAPLER.WAV");
    if(MenuState == true){
        MenuState = false;
        document.getElementById('GameMenu').remove();
    }else{
        MenuState = true;
        mkNewGameMenu();
    } 
    if(speakerState == true){mySoundFX.play();}

}

function selectMenuItem(btnSelected){
    let mySoundFX = new sound("/sound/POP002.WAV");
    switch(btnSelected){
        case "Easy":
            //console.log('easy')
            GAMELEVEL = new GameLevel.selectGameLevel('easy');            
            document.getElementById('level').innerHTML = 'Easy';
            renewDisplay();            
            break;
        case "Medium":
            //console.log('medium')
            GAMELEVEL = new GameLevel.selectGameLevel('medium');
            document.getElementById('level').innerHTML = 'Medium';
            renewDisplay();            
            break;
        case "Hard":
            //console.log('hard')
            GAMELEVEL = new GameLevel.selectGameLevel('hard');
            document.getElementById('level').innerHTML = 'Hard';
            renewDisplay();            
            break;
        case "NewGame":
            //console.log('new game')
            mySoundFX.play();
            renewDisplay();            
            break;
        case "Close":
            
            break;
    }
    GAMELEVEL;
    console.log(GAMELEVEL.easy);
    MenuState = false;
    document.getElementById('GameMenu').remove();
    if(speakerState == true){mySoundFX.play();}

}

function mkdiv(col,row,val){
    let container = document.getElementById("gmContainer");
    let node = document.createElement("div");
    node.setAttribute("id","node-" + col + "-" + row);
    if(col == 2 || col ==5 ){
        if(row == 2 || row == 5){
          node.setAttribute("class","grid-item grid-item-bottom-Side");  
        }else{
            node.setAttribute("class","grid-item grid-item-Side");
        }
        
    }else if(row == 2 || row == 5){
        node.setAttribute("class","grid-item grid-item-bottom")
    }else {
        node.setAttribute("class","grid-item"); 
    }
    node.style.background = 'white';
    node.setAttribute('onClick',"divSelected(" +  "'node-" + col + "-" + row + "'" + ")");
    node.setAttribute('data-game-cell','');
    node.innerHTML = val;
    container.appendChild(node);
}


function mkspan(id,val){
    let container = document.getElementById(id);
    let node = document.createElement("span");
    node.setAttribute('id',id + "-note-" + digitConvert(val));
    node.setAttribute('class','note-item note-item-' + digitConvert(val) + '');
    node.setAttribute('data-note-cell','');
    node.innerHTML = val;
    container.appendChild(node);
}

function mkNewGameMenu(){
    let mainDoc = document.getElementById("gmContainer");
    let node = document.createElement('div');
    node.setAttribute('id','GameMenu');
    node.setAttribute('class','game-menu');

    let menuLable = document.createElement('p');
    let btnEasy = document.createElement('button');
    let btnMedium = document.createElement('button');
    let btnHard = document.createElement('button');
    let btnNewGame = document.createElement('button');
    let btnClose = document.createElement('button');

    menuLable.setAttribute('id','menuLable');
    menuLable.setAttribute('class','menu-lable');
    menuLable.innerHTML = 'Menu';

    btnEasy.setAttribute('id','btnEasy');
    btnEasy.setAttribute('class','menu-btn-item menu-btn-easy');
    btnEasy.innerHTML = 'Easy';
    btnEasy.setAttribute('onclick','selectMenuItem("'+ 'Easy' + '")');

    btnMedium.setAttribute('id','btnMedium');
    btnMedium.setAttribute('class','menu-btn-item menu-btn-medium');
    btnMedium.innerHTML = 'Medium';
    btnMedium.setAttribute('onclick','selectMenuItem("'+ 'Medium' + '")');

    btnHard.setAttribute('id','btnHard');
    btnHard.setAttribute('class','menu-btn-item menu-btn-hard');
    btnHard.innerHTML = 'Hard';
    btnHard.setAttribute('onclick','selectMenuItem("'+ 'Hard' + '")');

    btnNewGame.setAttribute('id','btnNewGame');
    btnNewGame.setAttribute('class','menu-btn-item menu-btn-new-game');
    btnNewGame.innerHTML = 'New Game';
    btnNewGame.setAttribute('onclick','selectMenuItem("'+ 'NewGame' + '")');

    btnClose.setAttribute('id','btnClose');
    btnClose.setAttribute('class','menu-btn-item menu-btn-Close');
    btnClose.innerHTML = 'Close';
    btnClose.setAttribute('onclick','selectMenuItem("'+ 'Close' + '")');

    node.appendChild(menuLable);
    node.appendChild(btnEasy);
    node.appendChild(btnMedium);
    node.appendChild(btnHard);
    node.appendChild(btnNewGame);
    node.appendChild(btnClose);
    mainDoc.appendChild(node);
}

function mkWinnerDisplay(TimeCompleted){
    const parent = document.getElementById('gmContainer');
    let node = document.createElement('div');
    let nodeChildBanner = document.createElement('span');
    let nodeChildTime = document.createElement('span');
    let nodeChildErrors = document.createElement('span');
    let nodeChildScores = document.createElement('div');
    let nodeChildClearScore = document.createElement('button');

    node.setAttribute("id","winnerDisplay");
    node.setAttribute('class','win-display');

    nodeChildBanner.setAttribute('id','banner');
    nodeChildBanner.setAttribute('class','banner');
    nodeChildBanner.innerHTML = 'Winner!';

    nodeChildTime.setAttribute('id','timecompleted');
    nodeChildTime.setAttribute('class','time-completed');
    nodeChildTime.innerHTML = "Time completed: " + TimeCompleted;

    nodeChildErrors.setAttribute('id','errors');
    nodeChildErrors.setAttribute('class','errors');
    nodeChildErrors.innerHTML = "Mistakes made: <span style=color:red>" + Errors + "</span>";

    nodeChildScores.setAttribute('id','scoresList');
    nodeChildScores.setAttribute('class','scores-item');    

    nodeChildClearScore.setAttribute('id','clearScores');
    nodeChildClearScore.setAttribute('class','btnclearscores-item');
    nodeChildClearScore.setAttribute('onclick','clearScores()');
    nodeChildClearScore.innerHTML = 'Clear Scores'

    node.appendChild(nodeChildBanner);
    node.appendChild(nodeChildTime);
    node.appendChild(nodeChildErrors);
    node.appendChild(nodeChildScores);
    node.appendChild(nodeChildClearScore);
    
    parent.appendChild(node);
    processStorage();
}

function mkHelpDiv(){
    const parent = document.getElementById("gmContainer");
    let node = document.createElement("div");
    node.setAttribute("id","help");
    node.setAttribute("class","help-item");

    let nodeFrame = document.createElement('iframe');
    nodeFrame.setAttribute("id","helpFrame");
    nodeFrame.setAttribute("class","help-item-frame");
    nodeFrame.setAttribute("title","Sudoku Help");
    nodeFrame.setAttribute("src","help.html");

    let nodeBtnExit = document.createElement('button');
    nodeBtnExit.setAttribute("id","btnExit");
    nodeBtnExit.setAttribute("class","help-item-btn");
    nodeBtnExit.setAttribute("onclick",'exitHelp("'+ 'help' + '")')
    nodeBtnExit.innerHTML = "Exit";

    node.appendChild(nodeFrame);
    node.appendChild(nodeBtnExit);
    parent.appendChild(node);
}

function sound(src) {
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.sound.setAttribute("preload", "auto");
    this.sound.setAttribute("controls", "none");
    this.sound.style.display = "none";
    document.body.appendChild(this.sound);
    this.play = function(){
      this.sound.play();
    }
    this.stop = function(){
      this.sound.pause();
    }
  }