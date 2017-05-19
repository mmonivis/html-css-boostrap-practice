$(document).ready(function(){
    // console.log("Test");

    // $('#parent').click(function(){
    //     $(this).css({
    //         'perspective': '500px'
    //     });
    // });
    $('#change-perspective').change(function(){
        // console.log('The input box changed values');
        // console.log($(this.).val());
        var newVal = $(this).val();
        $('#parent').css({
            'perspective': newVal
        })
    })

    $('#change-loc').change(function(){
        // console.log('The input box changed values');
        // console.log($(this.).val());
        var newVal = $(this).val();
        $('#parent').css({
            'perspective-origin': newVal
        })
    })

    $('.card-holder').click(function(){
        $(this).toggleClass('flip');
    })

});