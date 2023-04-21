// task 1

// var amount =prompt ('enter amount')
// var zakat= amount/40
// alert(zakat)




//task 2

// alert("Welcome to Fitra calculation App");
// var familyMembers= prompt("Enter Your Family Members...");
// familyMembers=Number(familyMembers);
// var fitraMethod= prompt("Choose a Fitrah method\n Wheat\nBarley\nDates\nRaisin");
// var fitra=0;
// if ( fitraMethod=='wheat' || fitraMethod== 'WHEAT'){
//     fitra=familyMembers*wheat;
//     alert("Your Fitra amount for the whole family will be " + fitra);
// }
//  else if
 
//  ( fitraMethod=='barley ' ||fitraMethod== 'BARLEYE'){
    
//     fitra=familyMembers*450;
//     alert("Your Fitra amount for the whole family will be " + fitra);
// } 
// else if
// ( fitraMethod=='dates'|| fitraMethod=='DATES'){
//     fitra=familyMembers*2150;
//     alert("Your Fitra amount for the whole family will be " + fitra);
// }
// else if
// ( fitraMethod==='raisin' || fitraMethod=='RAISIN'){
//     fitra=familyMembers*2800;
//     alert("Your Fitra amount for the whole family will be " + fitra);
// }
//  else{
//     alert ("Enter from given values");
//  }

 
//  task 3
 
// var secretNumber= 5;
// var guessNumber = prompt ("Enter your Guess Number  ")
// guessNumber=Number(guessNumber);
// if (secretNumber==guessNumber)
// {
// alert("Congratulation , you guess the secret number " + secretNumber )
// }
// else if (guessNumber>secretNumber){
//     alert ("Opz your number is greater then secret number , guess again  " + secretNumber)
// }
// else if (guessNumber<secretNumber){
//     alert("Opps your number is less then secret number , guess again" + secretNumber)
// }
// else
// alert("Try Again");
 


// task 4

// const name=prompt("Enter your name ");
// let extract=name.slice(0,1);
// let letters=name.slice(1,10);
// let uppercaseLetter=extract.toUpperCase();
// //alert(uppercaseLetter);
// let result=uppercaseLetter.concat(letters);
// alert(result);



// task 5


// const contactNames=[];                               // define our array
// const contactNumbers=[];
// for (var i = 0; i < 3; i++) {              // loop 10 times
//   contactNames.push(prompt('Enter Your Names ' + (i+1))); // push the value into the array
// contactNumbers.push(prompt('Enter Contact Numbers ' + (i+1))); 
// }
//    for(var j=0;j<3;j++){
//     document.write("Name : "+ contactNames[j]+ " Contact Number: "+contactNumbers[j] +"<br>");
//    }
    
// TASK 6:

// var products = ["(1): Biryani", "(2): Karahi", "(3): Zinger Roll", "(4): French Fries", "(5): Ice-Cream", "(6): Soft drink"]

// var productPrompt = "Which product do you want? Please enter item number \n"

// for (var index = 0; index < products.length; index++) {
//     productPrompt += products[index] + "\n"
// }
// var itemToRemove = +prompt(productPrompt) - 1
// console.log("User selected: " + products[itemToRemove])
// products = products.slice(0, itemToRemove).concat(products.slice(itemToRemove + 1));
// console.log("Remaining products: " + products.length + "\n" + products)


   

//    task 7


// var nationality= prompt("Enter your Nationality");
// var gender= prompt("Gender");
// var age= +prompt("Enter your Age");
// var martialStatus;
// if (nationality==="pakistani" || nationality==='indian'){  
//           if (age>18 && gender=="male"){
//            alert("You are above 18  & male so Eligible for vote");
//                                        }
//               else if(age>18 && gender=="female"){
//     martialStatus=prompt("Are you married or not");
//      if(martialStatus=="yes"){
//         alert("You are married so eligible for vote");
//     }
//     else{
//         alert("You are not married , so not eligible for vote");
//     }
// }
// else{
//     alert(" You are below 18 or not female so Not Eligible for Vote");
// }
// }
// else{
//     alert("You are not Pakistani or Indian");
// }
 

// task 8
 
// var WorldCupSquad=[" inzamam ul haq "," Haris Rauf " ," Iftikhar Ahmed "," shahid affridi "," waseem akhter "," Imad Waseem "," Shaheen Afridi ",
// " Shaheen Afridi "," M.Rizwan "," sami khan "," fakher zaban "," Zaman Khan "," M.Haris "," Shuaib malik "," IhsanUllah "];
// alert ("The WorldcupSquad team players are : " + WorldCupSquad)
// var matchPlayers=WorldCupSquad.slice(0,11);
// alert ("The selected Pakistani Team players are : " + matchPlayers);
 
  