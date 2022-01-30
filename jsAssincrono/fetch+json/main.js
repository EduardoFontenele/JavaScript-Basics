// fetch('pessoas.json')
// .then(response => response.json())
// .then(jsonData =>  loadTableContent(jsonData))

axios('pessoas.json')
    .then(response => loadTableContent(response.data))

function loadTableContent(data) {

    const table = document.createElement('table')

    for(let pessoa of data) {
        const tr = document.createElement('tr')

        let td1 = document.createElement('td')
        td1.innerHTML = pessoa.nome
        tr.appendChild(td1)

        let td2 = document.createElement('td')
        td2.innerHTML = pessoa.email
        tr.appendChild(td2)

        let td3 = document.createElement('td')
        td3.innerHTML = pessoa.cpf
        tr.appendChild(td3)

        table.appendChild(tr)

        const result = document.querySelector('.resultado')
        result.appendChild(table)
    }
}


