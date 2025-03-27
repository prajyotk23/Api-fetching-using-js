fetch("https://vpic.nhtsa.dot.gov/api/vehicles/GetAllMakes?format=json")
    .then(response => response.json())
    .then(data => {
        const tbody = document.getElementById("tbody");
        data.Results.slice(0, 10).forEach((car, index) => {
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${index + 1}</td>
                <td>${car.Make_Name}</td>
                <td>N/A</td>
                <td>N/A</td>
                <td>Car brand available in the market</td>
            `;
            tbody.appendChild(row);
        });
    })
    .catch(error => console.error("Error fetching data:", error));
