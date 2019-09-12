function buttonClick() {
    if (document.getElementById('dateTimeText').innerHTML == "") {
        document.getElementById('dateTimeText').innerHTML = Date();
        document.getElementById('dateTimeButton').innerHTML = "Click to Collapse!";
    } else {
        document.getElementById('dateTimeText').innerHTML = "";
        document.getElementById('dateTimeButton').innerHTML = "Click for Date/Time!";
    }
}