var gb = 100;
var storage = "100 GB";

$('.gmailinbox').each(function () {
    $(this).prop('Counter',543192).animate({
        Counter: $(this).text()
    }, {
        duration: 86400000,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now));
        }
    });
});
$('.accountstorage').each(function () {
    $(this).prop('Counter',29.44).animate({
        Counter: $(this).text()
    }, {
        duration: 86400000,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.round(now * 100)/100);
        }
    });
});
$('.accountstorageprogress').each(function () {
    $(this).prop('Counter',0.2944).animate({
        Counter: $(this).attr('value')
    }, {
        duration: 86400000,
        easing: 'swing',
        step: function (now) {
            $(this).attr('value',now)
        }
    });
});

$("button.google-one-plans").click(function(){
  $(".dialog, .dialog-inner").removeClass("closed");
}); 

$("button.cancel-dialog").click(function(){
  $(".dialog, .dialog-inner").addClass("closed");
}); 
