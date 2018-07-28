$(document).ready(() => {
$(".card-body").hide();
$("#card-heading1").click(function(){
    if($(".card-body1").is(":hidden"))
    {$(".card-body1").show(100);
    $(".card-body2").hide(100);
    $(".card-body3").hide(100);
    $(this).addClass("design");
    $("#card-heading3").removeClass("design");
    $("#card-heading2").removeClass("design");
    }
    else {$(".card-body1").hide(100);
    }
}
)

$("#card-heading2").click(function(){
    if($(".card-body2").is(":hidden")){$(".card-body2").show(100);
    $(".card-body1").hide(100);
    $(".card-body3").hide(100);
    $(this).addClass("design");
    $("#card-heading1").removeClass("design");
    $("#card-heading3").removeClass("design");
}
    else {$(".card-body2").hide(100);
}
}
)
$("#card-heading3").click(function(){
    if($(".card-body3").is(":hidden")){$(".card-body3").show(100);
    $(".card-body2").hide(100);
    $(".card-body1").hide(100);
    $(this).addClass("design");
    $("#card-heading1").removeClass("design");
    $("#card-heading2").removeClass("design");
}
    else {$(".card-body3").hide(100);
}
}
)
$(document).click(function(event) { 
    if(!$(event.target).closest('.card-heading').length) {
            $('.card-heading').removeClass("design");
    }        
})
}) // end doc ready