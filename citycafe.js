$(document).ready(
    function(){
        $('.item').click(            
            function(){
                let toAdd = $(this).attr('data-item');
                 $('ol').append('<li>' + toAdd + '</li>');
            });
        $(document).on('click','li', function(){
            $(this).fadeOut('slow');    
        });
});