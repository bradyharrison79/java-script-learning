async function loadUser() {
    let display = document.getElementById("userDetails")
    display.innerHTML = "Loading...";
    fetch(`https://jsonplaceholder.typicode.com/users/2`)
        .then(response => {
            if (!response.ok) throw new Error("Network Error: Data not found");
            return response.json();
        }).then(data => {
            display.innerHTML = `
                    <p><strong>Name: </strong> ${data.name}</p>
                    <p><strong>Username: </strong> ${data.username}</p>
                    <p><strong>Email: </strong> ${data.email}</p>
                    <p><strong>Phone: </strong> ${data.phone}</p>
                    <p><strong>Website: </strong> ${data.website}</p>
                    <p><strong>Address: </strong> ${data.address.street} , ${data.address.suite} , ${data.address.city} , ${data.address.zipcode} </p>
                    <p><strong>Company: </strong> ${data.company.name} , ${data.company.catchPhrase} , ${data.company.bs} </p>
                    
                `;

        }).catch(error =>{ 
            display.innerHTML = `<p> style= "color:red;"> Error: ${error}</>p`;
        });    
}