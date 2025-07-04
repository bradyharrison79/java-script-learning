// Can use $ or jQuery for the funtion, $ is just shorter
jQuery(document).ready(function () {
    console.log("Ready...");

    $(`#loadUser`).click(function () {
        console.log("Click ...");

        $(`#userDetails`).html("loading...");

        // load data from api
        $.ajax({
            url: 'https://jsonplaceholder.typicode.com/users/2', // API URL
            method: 'Get',
            async: true,
            success: function(data) {
                $(`#userDetails`).html(`

                    <p><strong>Name: </strong> ${data.name}</p>
                    <p><strong>Username: </strong> ${data.username}</p>
                    <p><strong>Email: </strong> ${data.email}</p>
                    <p><strong>Phone: </strong> ${data.phone}</p>
                    <p><strong>Website: </strong> ${data.website}</p>
                    <p><strong>Address: </strong> ${data.address.street} , ${data.address.suite} , ${data.address.city} , ${data.address.zipcode} </p>
                    <p><strong>Company: </strong> ${data.company.name} , ${data.company.catchPhrase} , ${data.company.bs} </p>
                    
                `);
            },
            error: function(xhr, status, error) {
                $(`#userDetails`).html(`<p> style= "color:red;"> Error: ${error}</>p`);
            }
        })

    }); //click

}); // ready