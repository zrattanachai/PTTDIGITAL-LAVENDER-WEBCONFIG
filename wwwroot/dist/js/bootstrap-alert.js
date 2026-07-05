/**
 * Created by Austen.Liao on 2018/1/31.
 */
$.bsAlert = {
    alertTitle:"Lavender Config",
    confirmTitle:"Lavender Config",
    closeDisplay:"Cancel",
    sureDisplay:"OK",
    isConfirm:false,
    init:function(w){
        this.width = w;
    },
    createAlertWin:function () {
        var $h1 = "";
        $h1 += "<div id='bsAlertAlert' class=\"bsAlert alert alert-primary alert-dismissible fade show\" role=\"alert\">";
        $h1 += "    <h4 class=\"alert-heading\">"+this.alertTitle+"</h4>";
        $h1 += "    <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">";
        $h1 += "    <span aria-hidden=\"true\">&times;</span></button>";
        $h1 += "    <hr>";
        $h1 += "    <p class=\"alert-msg\">warning message</p>";
        $h1 += "</div>";
        $("body").append($h1);
    },
    alert:function(msg){
        $.bsAlert.createAlertWin();
        $(".alert").show();
        $(".alert-msg").text(msg);
        setTimeout(function () {
            $(".alert").alert('close')
        }, 3000);
        //setTimeout(function () {
        //    $('#bsAlertAlert').remove();
        //}, 5000);
    },
    createConfirmWin:function (msg) {
        var $h1 = "";
        $h1 += "<div class='modal fade' id='bsAlertModal' tabindex='-1' role='dialog' aria-labelledby='myModalLabel' aria-hidden='true' data-backdrop='static'>";
        $h1 += "    <div class='modal-dialog' role='document'>";
        $h1 += "        <div class='modal-content'>";
        $h1 += "            <div class='modal-header'>";
        $h1 += "                <h5 class='modal-title' id='myModalLabel'>"+this.confirmTitle+"</h5>";
        $h1 += "                <button type='button' class='close' data-dismiss='modal' aria-label='Close'>";
        $h1 += "                <span aria-hidden='true'>&times;</span>";
        $h1 += "                <span class='sr-only'>Close</span>";
        $h1 += "                </button>";
        $h1 += "            </div>";
        $h1 += "            <div class='modal-body'>";
        $h1 += "                <h5>"+msg+"</h5>";
        $h1 += "            </div>";
        $h1 += "            <div class='modal-footer'>";
        $h1 += "                <button type='button' class='btn btn-outline-info' data-dismiss='modal' id='deleteModal'>"+this.closeDisplay+"</button>";
        $h1 += "                <button type='button' id='bsSaveBtn' class='btn btn-outline-success'>"+this.sureDisplay+"</button>";
        $h1 += "            </div>";
        $h1 += "        </div>";
        $h1 += "    </div>";
        $h1 += "</div>";
        $("body").append($h1);
    },
    confirm:function(msg,fun){
        $.bsAlert.createConfirmWin(msg);
        $('#bsAlertModal').modal('show');
        $("#bsSaveBtn").click(function(){
            fun();
            $('#bsAlertModal').modal('hide');
            //$(".modal-backdrop").remove();
            //$('#bsAlertModal').remove();
        });
        $("#deleteModal").click(function () {
            $(".modal-backdrop").remove();
            $('#bsAlertModal').remove();
        });
    }
}
$("#bsAlertModal").on("hidden", function () {
    $(this).removeData("modal");
});