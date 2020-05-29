function deletePagante() {
    var cestinoIcon = $(this);
    var paganteHtml = cestinoIcon.parent();
    var id = paganteHtml.data('id');
    console.log(id);
    $.ajax({
        url: "deletePaganti.php",
        method: "GET",
        data:{
            id: id
        },
        success: function (data) {

            console.log(data);
            paganteHtml.fadeOut("slow", function () {
                paganteHtml.remove();
            });
        },error: function (err) {
            console.error(err);
        }
    });
}
$("#target").on("click", ".delete", deletePagante);
function printPaganti(paganti) {
    var source = $("#pagante-template").html();
    var template = Handlebars.compile(source);
    var target = $("#target");
    for (const pagante of paganti) {
        var html = template(pagante);
        target.append(html);
    }
}
function getPaganti() {
    $.ajax({
        url: "getPaganti.php",
        method: "GET",
        success: function (paganti) {
            console.log(paganti);
            printPaganti(paganti);
            
        },error: function (err) {
            console.error(err);
        }
    });
    
}

function init() {
    getPaganti();
}
$(document).ready(init);