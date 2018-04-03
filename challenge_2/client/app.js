

$('form').on('submit', function (e) {
    e.preventDefault();
    var data = {item: e.target[0].value};
    fetch('*', {
        method: 'post',
        body: JSON.stringify(data),
        headers: new Headers({
            'Content-Type': 'application/json'
        })
    }).then(function (response) {
        fetch('/load', {
            method: 'get',
            headers: new Headers({
              'Content-Type': 'application/json'
          })
        }).then(function(response) {
            console.log(response);
        })
    }).catch(function (err) {
        // Error :(
    });
});

