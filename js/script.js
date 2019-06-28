
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
 } else { $("#other-title").hide();}            //hides the input field if not selected
});                                        


//T-Shirt Section 

 $("#design > option:nth-child(1)").hide();     //hides the select theme option
 const $colorOption = $('<option selected value="none">Please select a T-Shirt Theme</option>'); //variabe that hold the text value
 $("#color > option:nth-child(1)").before($colorOption); //displays the variable text to the 1st option item

 //$("#color").prepend($colorOption).val(0);         //.html hide the options but places text at top. This works but top works better
$colorOption.css({backgroundColor: "yellow"});       //this highlight the bg of the text 


$("select[name=user_design").change(function(){
$("#color > option").each(function (index, value){
    $(this).toggle(); //"#colors-js-puns"
if( this.value !== " js puns") 
{// $(value).attr('cornflowerblue');
     $("#color > option:nth-child(2)").show();
   $("#color > option:nth-child(3):hidden").show();
   $("#color > option:nth-child(4):hidden").show();
} else {$("#colors-js-puns").hide();}

});


});

//this works
//  $("select[name=user_design").change(function(){

//  if ($('select[name=user_design] option:selected').val() =='js puns')
//     { $("div:hidden").show();  }               //("select[value~=cornflowerblue]").show$('div:hidden').show();
//     else { }
    
    
// if ($('select[name=user_design] option:selected').val() == 'heart js') {
//         $("#colors-js-puns").show();

// }

// });




// $("#color").hide();

//$("#target").prop("selectedIndex", 0).change();
// $('#design').on('change', function(){



