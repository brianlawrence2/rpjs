var parseID = 'ujid4uXj8Pi0VKo1aX87OnO1w53tIfVeGbR3zM44';
var parseRestKey = 'ilmSR7x76rlk5Dqu9EkMMlu5a5bMXs2n1tjGccxm';

$(document).ready(function () {
    getMessages();
    $('#send').click(function () {
        var username = $('input[name=username]').attr('value');
        var message  = $('input[name=message]').attr('value');
        console.log(username);
        console.log('!');
        $.ajax({
            url: 'https://api.parse.com/1/classes/MessageBoard',
            headers: {
                'X-Parse-Application-Id': parseID,
                'X-Parse-REST-API-Key': parseRestKey
            },
            contentType: 'application/json',
            dataType: 'json',
            processData: false,
            data: JSON.stringify({
                'username': username,
                'message': message
            }),
            type: 'POST',
            success: function () {
                console.log('sent');
                getMessages();
            },
            error: function () {
                console.log('error');
            }
        });
    })
});

function getMessages() {
    $.ajax({
        url: 'https://api.parse.com/1/classes/MessageBoard',
        headers: {
            'X-Parse-Application-Id': parseID,
            'X-Parse-REST-API-Key': parseRestKey
        },
        contentType: 'application/json',
        dataType: 'json',
        type: 'GET',
        success: function (data) {
            console.log('get');
            updateView(data);
        },
        error: function () {
            console.log('error');
        }
    });
}

function updateView(messages) {
    var table = $('.table tbody');
    table.html('');
    $.each(messages.results, function (index, value) {
        var trEl = $('<tr><td>' + value.username + '</td><td>' + value.message + '</td></td>');
        table.append(trEl);
    });
    console.log(messages);
}