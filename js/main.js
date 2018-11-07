

$( document ).ready(function() {
    $( "#datepicker" ).datepicker({ dateFormat: "dd/mm/yy" }).val();

    $( "#country" ).selectmenu();
    $( ".sex" ).checkboxradio();
    $( ".btn-submit" ).button();
    $(".modal-window-closen").click(() => {
        $(".modal-window-wrap").removeClass("active");
    })
    $( ".btn-submit" ).click( function( event ) {
        event.preventDefault();
        validation();

    } );
});




function validation() {

    /*cheackValue( $("#firstName"), $("#errorFirstName"));
    cheackValue($("#lastName"), $("#errorLastName"));
    cheackValue($("#datepicker"), $("#errorDatepicker"));
    cheackValue($("#email"), $("#errorEmail"));
    cheackValue($("#password"), $("#errorPassword"));
    cheackValue($("#address"), $("#errorAddress"));


    let  sex = $("input[name=gender]:checked").val();*/


    let  firstName = $("#firstName").val();
    console.log('firstName', cheackValue( $("#firstName"), $("#errorFirstName")));
    let  lastName = $("#lastName").val();
    console.log('lastName', cheackValue($("#lastName"), $("#errorLastName")));
    let  birthday = $("#datepicker").val();
    console.log('birthday', cheackValue($("#datepicker"), $("#errorDatepicker")));
    let  sex = $("input[name=gender]:checked").val();
    console.log('sex', sex !== undefined);
    let  country = $("#country").val();

    let  email = $("#email").val();
    console.log('email', cheackValue($("#email"), $("#errorEmail")));
    console.log('email', validateEmail($("#email"), $("#errorEmail")));
    let  password = $("#password").val();
    console.log('password', cheackValue($("#password"), $("#errorPassword")));
    let  address = $("#address").val();
    console.log('address', cheackValue($("#address"), $("#errorAddress")) );




    if(
        cheackValue($("#firstName"), $("#errorFirstName")) &&
        cheackValue($("#lastName"), $("#errorLastName")) &&
        cheackValue($("#datepicker"), $("#errorDatepicker")) &&
        validateDate($("#datepicker"), $("#errorDatepicker")) &&
        validateEmail($("#email"), $("#errorEmail")) &&
        cheackValue($("#email"), $("#errorEmail")) &&
        sex !== undefined &&
        cheackValue($("#password"), $("#errorPassword")) &&
        cheackValue($("#address"), $("#errorAddress"))   )  {
          $('.modal-window-wrap').addClass('active');
    }   else {

        console.log(validateDate($("#datepicker"), $("#errorDatepicker")));
        if(sex === undefined) {
            $("#errorSex").html('Please choose value')
        } else {
            $("#errorSex").html('');
        }

        if(cheackValue($("#email"), $("#errorEmail"))){
            validateEmail($("#email"), $("#errorEmail"));
        }
        if(cheackValue($("#datepicker"), $("#errorDatepicker"))){
            validateDate($("#datepicker"), $("#errorDatepicker"));
        }

    }


}


function validateDate(date, error){
    var dateRegex = /^(?=\d)(?:(?:31(?!.(?:0?[2469]|11))|(?:30|29)(?!.0?2)|29(?=.0?2.(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00)))(?:\x20|$))|(?:2[0-8]|1\d|0?[1-9]))([-.\/])(?:1[012]|0?[1-9])\1(?:1[6-9]|[2-9]\d)?\d\d(?:(?=\x20\d)\x20|$))?(((0?[1-9]|1[012])(:[0-5]\d){0,2}(\x20[AP]M))|([01]\d|2[0-3])(:[0-5]\d){1,2})?$/;

    if(dateRegex.test(date.val()))
    {
        date.removeClass('input-error');
        error.html('');
        return true;
    } else {
        date.addClass('input-error');
        error.html('Not correct format date');
        return false;
    }

}


function validateEmail(email, error) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (re.test(email.val())){
        email.removeClass('input-error');
        error.html('');
        return true
    } else {
        email.addClass('input-error');
        error.html('Email value isn\'t correct');
        return false
    }
}



function cheackValue(element , error){
    if(element.val().length === 0){
        element.addClass('input-error');
        error.html('Enter value. Field is empty');
        return false
    }
    if(element.val().indexOf("\'") === -1 && element.val().indexOf("\"") === -1){
        error.html('');
        element.removeClass('input-error');
        return true

    } else {
        error.html('Not correct value. Don\'t use symbol \' or \"');
        element.addClass('input-error');
        return false
    }

}



function validateName(value){
    return  /^[A-Za-z\s]+$/.test(value)
}