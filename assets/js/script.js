// using moment to display the date
function getCurrentTime() {
    let currentTime = moment().format('MMM DD, YYYY');
    $("#currentDay").text(currentTime);
}
getCurrentTime();

dayPlanned.forEach(function(thisHour) {

    let hourRow = $("<form>")
    hourRow.addClass('row')
    hourRow.css('padding: 10px')
    $(".container").append(hourRow);

    let hourField = $("<div>");
        hourField.text(`${thisHour.hour}${thisHour.meridiem}`)
        hourField.addClass('col-md-1 hour');

    let hourPlan = $("<div>")
    hourPlan.addClass('col-lg-12 description p-1');

    let userData = $("<textarea>");
    hourPlan.append(userData);
    userData.attr("id", thisHour.id);
    // using moment to compare current time and apply a past/present/future class
    if (thisHour.time < moment().format("HH")) {
        userData.addClass('past');
    } else if (thisHour.time === moment().format("HH")) {
        userData.addClass('present')
    } else if (thisHour.time > moment().format("HH")) {
        userData.addClass('future')
    }

    let saveBtn = $("<i>Save</i>")
    let saveBtnAttr = $("<button>")
    saveBtnAttr.addClass('col-md-12 saveBtn');
    saveBtnAttr.append(saveBtn);
    hourRow.append(hourField, hourPlan, saveBtnAttr);
});


// TODO - Add local storage and make sure it displays properly
// function saveDayPlanned () {
//     localStorage.setItem("dayPlanned", json.stringify(dayPlanned));
// }


