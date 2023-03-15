// code your solution here
function saturdayFun(myWork="roller-skate"){

    return `This Saturday, I want to ${myWork}!`;

}

function mondayWork(work="go to the office"){
    return `This Monday, I will ${work}.`;
}


 function wrapAdjective(myAdjective="*"){
    return function ( action="a hardworker"){
       return `You are ${myAdjective}${action}${myAdjective}!`;

    
    }
}