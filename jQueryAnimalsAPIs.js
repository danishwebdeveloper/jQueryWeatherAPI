// get animals details and interest


$(document).ready(function() {
    $('#submitBtn').click(function(event) {
        event.preventDefault();


        $.ajax({
            type: "GET",
            url: "https://learnwebcode.github.io/json-example/animals-1.json",
            // data: "data",
            dataType: "json",
            success: function(animals) {
                $.each(animals, function(indexInArray, animal) {
                    // console.log(animal.name);
                    $('.animals').append('<li>The Name is : ' + animal.name + '</li>');
                });
            },
            error: function() {
                console.log('error');
            }
        });

    });
});