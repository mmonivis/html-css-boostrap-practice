// console.log("Test");
// console.dir(document);

// var dom = $(document);
// console.log(dom);
// console.dir(window.$);
// console.dir($);
// console.dir(jQuery);
// console.dir(window.jQuery);

// 1. Wait until the document is fully loaded... i.e., ready
// 2. Once the DOM is loaded, run the anon function
$(document).ready(function(){
    // var thing = document.getElementById('thing');
    // var thing = $('#thing'); // Exact same thing as the line above!
    // console.log(thing);
    // console.log(document.getElementById('thing'));
    // console.log($('#image'); // Exact same thing as the line above!
    // console.log(document.querySelecter('#image')); // All three of these will target the same thing!

    // var classThing = document.getElementsByClassName('thing');
    // console.dir(classThing);
    // var classThing = $('.thing'); // Exact same thing as the line above!
    // console.dir(classThing);

    // document.getElementsByTagName('body');
    // body = $('body');

    $('button').click(function(){
        // console.log(this);
        // console.log($(this).attr('toDo'));
        var whatToDo = $(this).attr('toDo');
        if(whatToDo == 'hide'){
            $('#thing').hide();
        }else if(whatToDo == 'show'){
            $('#thing').show();
        }else if(whatToDo == 'toggle'){
            $('#thing').toggle();
        }else if(whatToDo == 'html'){
            // If you don't pass an arg, it will just return the current html
            console.log($('#thing').html());
            // If you pass HTML an arg, innerHTML will change to that
            console.log($('#thing').html('<strong>New innerHTML</strong>'));
        }else if(whatToDo == 'text'){
            // Text does NOT interpret HTML tags... Would show <strong> as text
            $('#thing').text('<strong>New innerHTML</strong>');
        }else if(whatToDo == 'prepend'){
            // Get the innerHTML, and += to the beginning
            // innerHTML = newText + HTML
            $('#thing').prepend('<strong>New innerHTML</strong>');
        }else if(whatToDo == 'append'){
            // Get the innerHTML, and += to the end
            // innerHTML = HTML + newText
            $('#thing').append('<strong>New innerHTML added to the end.</strong>');
        }else if(whatToDo == 'css'){
            // css method takes an argument, an object, just like css
            // it will apply the css as a style attribute
            $('#thing').css({
                'color': 'orange',
                'font-size': '20px',
                'background-color': 'blue',
                'border-radius': '10%'
            });
        }else if(whatToDo == 'addClass'){
            $('#thing').addClass('crazy-css');
            // Add class to the object
        }else if(whatToDo == 'removeClass'){
            $('#thing').removeClass('crazy-css');
            // Remove class from an object
        }else if(whatToDo == 'fadeToggle'){
            $('#thing').fadeToggle();
        }else if(whatToDo == 'slideToggle'){
            $('#thing').slideToggle(1500);
        }else if(whatToDo == 'hover'){
            $('#thing').hover(function(){
                $( this ).fadeOut( 100 );
                $( this ).fadeIn( 400 );
            });
        }else if(whatToDo == 'animate'){
            $('#thing').animate()
        }
    });

});

// 1. Wait until EVERYTHING is loaded (pics, vids, etc.)
// $(window).on("load", function(){
//     console.log("The window has loaded!")
//     var thing = document.getElementById('thing');
//     console.log(thing);
// })