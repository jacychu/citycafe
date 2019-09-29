$(document).ready(
    function(){
        $('.item').click(            
            function(){
                let toAdd = $(this).attr('data-item');
                 $('ol').append('<li>' + toAdd + '</li>');
            });
        $(document).on('touchstart','li', function(){
            $(this).fadeOut('slow');    
        });
        
});