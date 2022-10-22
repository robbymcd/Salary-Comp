$(function () {
    $('#salary1').on('click', function () {
        var x = $('#salary1').val();
        $('#salary1').val(addCommas(x));
    });
});
 
function addCommas(x) {
    var parts = x.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return parts.join(".");
}