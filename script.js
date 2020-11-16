var subtaskArr = []

var nineAmDivEl = $("#9");
var tenAmDivEl = $("#10");
var elevenAmDivEl = $("#11");
var twelvePmDivEl = $("#12");
var onePmDivEl = $("#1");
var twoAPmDivEl = $("#2");
var threePmDivEl = $("#3");
var fourPmDivEl = $("#4");
var fivePmDivEl = $("#5");
var sixPmDivEl = $("#6");
var sevenPmDivEl = $("#7");
var eightPmDivEl = $("#8");
var ninePmDivEl = $("#9pm");

//some function that will check local storage for subtask array if so grab it 
function getSubtask (){
    var initArr = JSON.parse(localStorage.getItem("subtaskArr"));
    console.log(initArr);
    
    if (initArr !== null) {
        subtaskArr = initArr
    }

    //how would i pull the time out of the object within the array to append it to the correct hour?


};

    


  // userFirstNameSpan.textContent = lastUser.firstName;
    // userLastNameSpan.textContent = lastUser.lastName;
    // userEmailSpan.textContent = lastUser.email;
    // userPasswordSpan.textContent = lastUser.password;
  

getSubtask();

// var taskObj = {
//     nineAm: [],
//     tenAm: [],
//     elevenAm: [],
//     twelvePm: [],
//     onePm: [],
//     twoPm: [],
//     threePm: [],
//     fourPm: [],
//     fivePm: [],
//     sixPm: [],
//     sevenPm: [],
//     eightPm: [],
//     ninePm: [],
// }
//  var calenderArray = [taskObj[i], taskobj[1] , taskobj[3]]  // trying to create an array where "taskObj" can be pushed to each index to create "taskobj" for different days


var timeDisplayEl = $("#time-display");


function displayTime() {
    var rightNow = moment().format('MMM DD, YYYY [at] hh:mm:ss a');
    timeDisplayEl.text(rightNow);
}




  var submitBtnEl = $("#taskSubmitBtn");
  var tableRowsEl = $("#tableRows");



submitBtnEl.on("click", function(event) {
    event.preventDefault();
    
    var taskEl = document.querySelector("#task").value;
    var dateEl = document.querySelector("#datepicker").value;
    var timeEl = document.querySelector("#busHours").value;



    if (taskEl === "") {
        alert("Task cannot be left empty!");
    } else if (dateEl === ""){
        alert ("Date cannot be left empty!");
    } else if (timeEl === ""){
        alert ("Time cannot be left empty!");
     } else {
        alert("Task added!");

        var subTasks = {
            task: taskEl,
            date: dateEl,
            time: timeEl,
        };
        subtaskArr.push(subTasks)
        localStorage.setItem("subtaskArr", JSON.stringify(subtaskArr));

        // var storTask = JSON.parse(localStorage.getItem("subTasks"));

        // console.log(storTask);
    }
});