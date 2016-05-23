$('.sidebar > div').click((e) => {
    var bookDiv = $(this); 
    $('#book-shelf').children().fadeOut(500).promise().then(function() {
        $('#book-shelf').empty();     

    $('#load').click(function() {
        setData();
    }); 
});
            });
            
