
$(document).ready(function () {
    function checkinputs() {
        const checkedinputs = $(".single-box input:checked").length;
        if (checkedinputs > 0) {
            $(".clear").show();
        } else {
            $(".clear").hide();
        }
    }
    function checkallinputs() {
        const allinputs = $(".single-box input").length;
        const checkedinputs = $(".single-box input:checked").length;
        if (checkedinputs === allinputs) {
            $(".select-all").text("unselect all");
        } else {
            $(".select-all").text("select all");
        }
    }
    function showselectall() {
        if ($(".single-box").length > 0) {
            $(".select-all").show();
        } else {
            $(".select-all").hide();
        }
    }

    // show remove button when input checked
    $(".single-box input").change(function () {
        checkallinputs();
        checkinputs();
        // show or hide rwmove button
        if ($(this).is(":checked")) {
            $(this).siblings(".remove").show();
        } else {
            $(this).siblings(".remove").hide();
        }
    });
    // delete box with remove button
    $(".single-box .remove").click(function () {
        $(this).parents(".single-box").remove();
        checkinputs();
        showselectall();
    });
    // check all and uncheck all
    $(".select-all").click(function () {
        if ($(this).text().trim() === "select all") {
            $(this).text("unselect all");
            $(".single-box input").prop("checked", true);
            $(".single-box input").siblings(".remove").show();
            $(".clear").show();
        } else {
            $(this).text("select all");
            $(".single-box input").prop("checked", false);
            $(".single-box input").siblings(".remove").hide();
            $(".clear").hide();
        }
    });
    // filter inputs.if checked show remove btn
    $(".single-box input").filter(function () {
        if ($(this).is(":checked")) {
            $(this).siblings(".remove").show();
        }
    });
    checkallinputs();
    checkinputs();
    // clear selected
    $(".clear").click(function () {
        $(".single-box input").filter(function () {
            if ($(this).is(":checked")) {
                $(this).parents(".single-box").remove();
            }
            checkinputs();
            showselectall();
        });
    });
    //
});
