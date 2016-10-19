$(document).ready(function() {

    $(document).on("click", ".international", function(event) {
        event.preventDefault();
        if ($(this).hasClass("active")) {
            $(this).removeClass("active");
            $("#slide-down").slideUp();
        } else {
        $("#international-drop").show();
        $("#politics-drop").hide();
        $("#business-drop").hide();
        $("#technology-drop").hide();
        $("#culture-drop").hide();
        $("#blogs-drop").hide();
        $("#slide-down").slideDown();
        $(this).addClass("active");
        }
    });

    $(document).on("click", ".politics", function(event) {
        event.preventDefault();
        if ($(this).hasClass("active")) {
            $(this).removeClass("active");
            $("#slide-down").slideUp();
        } else {
        $("#international-drop").hide();
        $("#politics-drop").show();
        $("#business-drop").hide();
        $("#technology-drop").hide();
        $("#culture-drop").hide();
        $("#blogs-drop").hide();
        $("#slide-down").slideDown();
        $(this).addClass("active");
        }
    });
        
    $(document).on("click", ".business", function(event) {
        event.preventDefault();
        if ($(this).hasClass("active")) {
            $(this).removeClass("active");
            $("#slide-down").slideUp();
        } else {
        $("#international-drop").hide();
        $("#politics-drop").hide();
        $("#business-drop").show();
        $("#technology-drop").hide();
        $("#culture-drop").hide();
        $("#blogs-drop").hide();
        $("#slide-down").slideDown();
        $(this).addClass("active");
        }
    });
        
    $(document).on("click", ".technology", function(event) {
        event.preventDefault();
        if ($(this).hasClass("active")) {
            $(this).removeClass("active");
            $("#slide-down").slideUp();
        } else {
        $("#international-drop").hide();
        $("#politics-drop").hide();
        $("#business-drop").hide();
        $("#technology-drop").show();
        $("#culture-drop").hide();
        $("#blogs-drop").hide();
        $("#slide-down").slideDown();
        $(this).addClass("active");
        }
    });
        
    $(document).on("click", ".culture", function(event) {
        event.preventDefault();
        if ($(this).hasClass("active")) {
            $(this).removeClass("active");
            $("#slide-down").slideUp();
        } else {
        $("#international-drop").hide();
        $("#politics-drop").hide();
        $("#business-drop").hide();
        $("#technology-drop").hide();
        $("#culture-drop").show();
        $("#blogs-drop").hide();
        $("#slide-down").slideDown();
        $(this).addClass("active");
        }
    });

    $(document).on("click", ".blogs", function(event) {
        event.preventDefault();
        if ($(this).hasClass("active")) {
            $(this).removeClass("active");
            $("#slide-down").slideUp();
        } else {
        $("#international-drop").hide();
        $("#politics-drop").hide();
        $("#business-drop").hide();
        $("#technology-drop").hide();
        $("#culture-drop").hide();
        $("#blogs-drop").show();
        $("#slide-down").slideDown();
        $(this).addClass("active");
        }
    });
        
});