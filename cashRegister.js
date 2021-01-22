function checkCashRegister(price, cash, cid) {
  var change = cash - price;
  var amountCID = 0;
  var check = [.01, .05, .1, .25, 1, 5, 10, 20, 100];
  var myRegister ={
      status: "",
      change: []
  };
  // for loop to find out how much cash we have in our register
  for(let i = 0; i < cid.length; i++){
    amountCID += cid[i][1];
  }
  // determines if we have enough cash in the cid to compensate for the change, if not, then it returns immediately
  if(parseFloat(amountCID).toFixed(2) == change){
    myRegister.status = "CLOSED";
    myRegister.change = [cid][0];
    return myRegister;
  }else if(parseFloat(amountCID).toFixed(2) < change){
    myRegister.status = "INSUFFICIENT_FUNDS";
    myRegister.change = [];
    return myRegister;
  }else{
      myRegister.status = "OPEN";
    // for loop goes through all of cid from highest to lowest
for(let i = 8; i > -1; i--){
  if((change - check[i]) >= 0){ // conditional to see where we should start in the cid
 console.log(change);
    var amountTaken = 0; // indicates amount we took from cid[i][0]
    while((cid[i][1] > 0) && (change - check[i]) >= 0){ // loop subtract check[i] until the amount in cid[i][0] runs out, then we move to the next cid[i][0]
    cid[i][1] = cid[i][1] - check[i];
    change = parseFloat(change).toFixed(2) - check[i];  // added the parFloat(x).toFixed(2) since the change goes to a ridiculous number like 36.739999999999995 even though we only subtracted 20 dollars from 96.74
    amountTaken += 1;
    console.log("check[i]" + check[i]);
    }
    myRegister.change.push([cid[i][0], check[i] * amountTaken]); //adds the cid to our myRegister object's change
    console.log(myRegister);
  }
}
// conditional statement for if we have enough cash in the cid for the change, but not the right change. for example if we have 3 ONE dollar bills and the change is 5 cents. We have enough, but not the correct change.
if(change > 0){
  myRegister.status = "INSUFFICIENT_FUNDS";
  myRegister.change = [];
}
  }
  return myRegister;
}

checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])
