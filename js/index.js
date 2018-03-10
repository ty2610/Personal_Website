$(document).ready(function() {
    $(function () {
        $('[data-toggle="tooltip"]').tooltip()
    });
    $(".round_Pictures").click(function(event){
        var holder = $(this).children("img").attr('src');
        var modal = $("#descriptionModal");
        $("#modalSubPic").attr("src",holder);
        $("#descriptionModalPreview").text($(this).children("p").text());
        $("#descriptionModalTitle").text($(this).children("h1").text());
        modal.modal('show');
    });
});