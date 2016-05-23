    $(function() {
    var i=0;
    var googleApi = "https://www.googleapis.com/books/v1/volumes?q=edgar+allan+poe";
    var googleData;
    $.getJSON(googleApi, function(json) {
        googleData = json.items;

        setData()
    });

    function setData(){
        var j = googleData.length > (i + 9)  ? (i + 9) : googleData.length;
        for (; i < j; i++) {
            var googleThumb = googleData[i].volumeInfo.imageLinks.smallThumbnail;
            var img = $('<img style="width: 250px; height: 250px;" src="' + googleThumb + '"/>')
            $('#book-shelf').append(img);
        }
    }       

    $('#load').click(function() {
        setData();
    }); 
});