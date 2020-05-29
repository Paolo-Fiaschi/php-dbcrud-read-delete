
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