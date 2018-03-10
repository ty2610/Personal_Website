$(document).ready(function() {
    $(function () {
        $('[data-toggle="tooltip"]').tooltip()
    });
    $(".round_Pictures").click(function(event){
        var pictureSrc = $(this).children("img").attr('src');
        var pageSrc = $(this).children("a").text();
        var modal = $("#descriptionModal");
        $("#modalSubPic").attr("src",pictureSrc);
        $("#descriptionModalPreview").text($(this).children("p").text());
        $("#descriptionModalTitle").text($(this).children("h1").text());
        $("#descriptionModalLink").attr("href", pageSrc);
        modal.modal('show');
    });
});