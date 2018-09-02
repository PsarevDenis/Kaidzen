function attach_delete() {
    $('.delete').off();
    $('.delete').click(function () {
        console.log("click");
        $(this).closest('.form-group').remove();
    });
}

$(document).ready(function () {
    $('.add-one').click(function () {
        var de = $('.dynamic-element').first().clone();
        de.appendTo('.dynamic-stuff').show();
        attach_delete();
    });

});
