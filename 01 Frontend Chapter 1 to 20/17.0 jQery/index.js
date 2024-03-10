// that way the h1 will be changed after jquery is loaded and ready. But if you add the jquery link in the end of
// the body and in front of the js link, you dont need it:
// $(document).ready(function() {
//     $("h1").css("color", "red")
// });
$("h1").css("color", "red");