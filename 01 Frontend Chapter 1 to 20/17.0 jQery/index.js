// that way the h1 will be changed after jquery is loaded and ready. But if you add the jquery link in the end of
// the body and in front of the js link, you dont need it:
// $(document).ready(function() {
//     $("h1").css("color", "red")
// });
$("h1").addClass("big-title");
// to keep css seperated from js, you can create classes in styles.css and add them in js:
$("button").addClass("margin-50");
$("button").text("Don`t click me!");
//manipulate text:
$("h1").text("See yaa...");
//manipulate html:
$("button").html("<em>make me green</em>") ;
//manipulate attributes:
$("a").attr("href", "https://www.yahoo.com");
//add listener:
$("h1").click(function() {
    alert("Hey hey!");
});
// add listener to all buttons:
$("button").click(function() {
    $("h1").css("color", "green");
})
//add a event listener for keyboard and print it in "H1":
$("body").keypress(function(event) {
    $("h1").text(event.key);
})
// more flexible listener can use all events available for js:
$("h1").on("mouseover", function() {
    $("h1").css("color", "blue");
})
//add new elements in html:
$("h1").before("<button>add before</button>");
$("h1").after("<button>add after</button>");
$("h1").prepend("<button>add prepend</button>");
$("h1").append("<button>add append</button>");
//remove elements:
//$("button").remove();

//for animations like fadeout or opacity check the course... also find "effects" on the jquery page...