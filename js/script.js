$(document).ready(function () {
    $(".back").hide();
    $(".front", ".flashcard").hover(function() {
      $(this).hide();
      $(this).siblings(".back").addClass("animated flipInY fast").show();
    });

    $(".back", ".flashcard").mouseleave(function() {
      $(this).hide();
      $(this).siblings(".front").addClass("animated flipInY fast").show();
    });
});
