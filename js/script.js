
window.onload = $("#name").focus();      //set focus on the input text element with id name when page is  loaded
$("#name").css({ backgroundColor: "yellow" }); // set the bg color of name field to yellow
$("#name").on('keypress', function (e) {
    $(e.target).css({ backgroundColor: "#e9f6fb" }); // this function sets the bgColor back to css style
});
//Job Role Section

$("#other-title").hide();             //selects input element with id other-title and hides it
$("select#title").on('click', function () {     // displays the hidden  input field when other is clicked
    if (this.value == "other") {
        $("input:hidden").show();
    } else { $("#other-title").hide(); }            //hides the input field if not selected
});


//T-Shirt Section 

$("#design > option:nth-child(1)").hide();     //hides the select theme option
const $colorOption = $('<option selected value="none">Please select a T-Shirt Theme</option>'); //variabe that hold the text value
$("#color > option:nth-child(1)").before($colorOption); //displays the variable text to the 1st option item

//$("#color").prepend($colorOption).val(0);         //.html hide the options but places text at top. This works but top works better
$colorOption.css({ backgroundColor: "yellow" });       //this highlight the bg of the text 

$("#colors-js-puns").hide();
$("select[name=user_design").change(function () {         //calls the select element that holds thsirt design themes function to


    if (this.value == "js puns")                          // conditional stament if the jspuns theme is selected
    {
        $("#colors-js-puns").show();                      // show the color div named clorjspuns
        $("#color > option:nth-child(2)").show();            //show t-shirt with theme js puns
        $("#color > option:nth-child(3)").show();            //show t-shirt with theme js puns
        $("#color > option:nth-child(4)").show();            //show t-shirt with theme js puns
        $("#color > option:nth-child(5)").hide();           //hide the t-shirt theme asso with heart js
        $("#color > option:nth-child(6)").hide();           //hide the t-shirt theme asso with heart js
        $("#color > option:nth-child(7)").hide();          //hide the t-shirt theme asso with heart js
    } else
        if (this.value == "heart js") {
            $("#colors-js-puns").show();                        //show the color div named clorjspuns
            $("#color > option:nth-child(2)").hide();            //hide t-shirt with theme js puns
            $("#color > option:nth-child(3)").hide();            //hide t-shirt with theme js puns
            $("#color > option:nth-child(4)").hide();           //hide t-shirt with theme js puns
            $("#color > option:nth-child(5)").show();           //show t-shirt theme asso with heart js
            $("#color > option:nth-child(6)").show();            //show t-shirt theme asso with heart js
            $("#color > option:nth-child(7)").show();            //show t-shirt theme asso with heart js
        }       //$("#colors-js-puns").hide();


});
// Activity Section

const totalCostTag = document.createElement("P");
totalCostTag.innerText = "Total Cost";
$(".activities").append(totalCostTag);

$(".activities").on('change', function () {
    let totalCost = 0;
    if ($("input[type=checkbox][name=all]").prop("checked")) {
        totalCost += 200
        //console.log("box checked");
    }

    if ($("input[type=checkbox][name=js-frameworks]").prop("checked")) {
        $("input[type=checkbox][name=express]").prop({ disabled: true, checked: false })
        totalCost += 100;
    }

    if ($("input[type=checkbox][name=js-libs]").prop("checked")) {
        totalCost += 100
    }

    if ($("input[type=checkbox][name=express]").prop("checked")) {
        totalCost += 100
    }

    if ($("input[type=checkbox][name=node]").prop("checked")) {
        totalCost += 100
    }

    if ($("input[type=checkbox][name=build-tools]").prop("checked")) {
        totalCost += 100
    }
    if ($("input[type=checkbox][name=npm]").prop("checked")) {
        totalCost += 100
    } else { console.log("no"); }
    totalCostTag.innerText = "Total Cost $" + totalCost;
});



