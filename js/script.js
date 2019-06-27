
window.onload = $("#name").focus();      //set focus on the input text element with id name when page is  loaded
$("#name").css({ backgroundColor: "yellow" }); // set the bg color of name field to yellow
$("#name").on('keypress', function (e) {
    $(e.target).css({ backgroundColor: "#e9f6fb" }); // this function sets the bgColor back to css style
});
//Job Role Section

$("#other-title").hide();             //selects input element with id other-title and hides it
$("select#title").on('click', function () {     // displays the hidden  input field when other is clicked
 if (this.value =="other") {
    $("input:hidden").show();
 } else { $("#other-title").hide();}
});                                        


//T-Shirt Section 

// $("#color").hide();
// $('#design').on('change', function(){


// });
// //const $jsPuns;
// //const heatJs;
// $("#color").each(function (index,element){
// if (condition) {                // theme ===jsPuns{$("#design").eq(0,1,2)}

// } else{ }

// });

// let section = document.getElementsByTagName('section')[0];

// section.addEventListener('click', (e) => {
//   console.log (event.target.tagName);
//   if (event.value == 'js puns' ){
//   const $jsPuns = $('#color').find(":selected").text( "cornflowerblue","darkslategrey","gold");
//e.target.style.display: only these colors "cornflowerblue","darkslategrey","gold"';}
// });
