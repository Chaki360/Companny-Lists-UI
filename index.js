let tbody = document.getElementById("tbody")
tbody.append(td_fun());

fetch("https://company-list-server.onrender.com/mock")
    .then(res => res.json())
    .then(json => json.map(data => {
        console.log(data)
        tbody.append(td_fun(data.companyName, data.companyCategory, data.companyLocation));

    }

    ));

function td_fun(companyName, companyCategory, companyLocation) {
    let td = document.createElement('tr');
    td.innerHTML = `  <td>${companyName}</td>
    <td>${companyCategory}</td>
    <td>${companyLocation}</td>`;
    return td;
}