$(document).ready(function() {
    $(".hide").click(function() { $(".test").hide(); })
    $(".show").click(function() { $(".test").show(); })
    $(".toggle").click(function() { $(".test").toggle(); })
    $(".slide-up").click(function() { $(".test").slideUp("slow"); })
    $(".slide-down").click(function() { $(".test").slideDown("slow"); })
    $(".slide-toggle").click(function() { $(".test").slideToggle("slow"); })
    $(".fade-out").click(function() { $(".test").fadeOut("slow"); })
    $(".fade-in").click(function() { $(".test").fadeIn("slow"); })
    $(".add-class").click(function() { $(".test").addClass("class1"); })
    $(".before").click(function() { $(".test").before("<h2>before in jquery</h2>"); })
    $(".after").click(function() { $(".test").after("<h2>after in jquery</h2>"); })
    $(".append").click(function() { $(".test").append("<h2>inside in jquery</h2>"); })
    $(".html").click(function() { $(".test").html("<h3>set html tage</h3>"); })
    $(".attr").click(function() { $("img").attr("src", "ajax.png"); })
    $(".val").click(function() { $("input").val("set value in jquery"); })
    $(".text").click(function() { $(".test").text("set text in jquery"); })








});