$(document).ready(function() {
    $(function () {
        $('[data-toggle="tooltip"]').tooltip()
    });
    $(".round_Pictures").click(function(event){
        var pictureSrc = $(this).children("img").attr('src');
        var pageSrc = $(this).children("a").text();
        var modal = $("#descriptionModal");
        $("#modalSubPic").attr("src",pictureSrc);
        $("#descriptionModalPreview").html($(this).children("p").html());
        $("#descriptionModalTitle").text($(this).children("h1").text());
        $("#descriptionModalLink").attr("href", pageSrc);
        modal.modal('show');
    });
});