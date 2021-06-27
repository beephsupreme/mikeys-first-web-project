const $ = function (id) {
    return document.getElementById(id);
};
var joinList = function () {
    var emailAddress1 = $("mail_address1").value;
    var emailAddress2 = $("mail_address2").value;
    var isValid = true;

    if (emailAddress1 == "") {
        $("mail_address1_error").firstChild.nodeValue = "This field is required.";
        isValid = false;
    } else {
        $("mail_address_error").firstChild.nodeValue = "";
    }


    if (isValid) {
        $("email_form").submit();
    }
};
window.onLoad = function () {

    $("join_list").onClick = joinList;
    $("email_address1").focus();
};
