let btnGet = document.querySelector('button');
let myTable = document.querySelector('#table');



let employees = [
    {name:'Mike',age:20,DOB:'21-Apr-2002',email:'mike@gmail.com',company:'Gemini'},
    {name:'Eleven',age:20,DOB:'03-Sep-2002',email:'eleven@gmail.com',company:'Gemini'},
    {name:'Max',age:21,DOB:'19-May-2001',email:'max@gmail.com',company:'Gemini'},
    {name:'Dustin',age:22,DOB:'12-Apr-2000',email:'dustin@gmail.com',company:'Gemini'},
    {name:'Lucas',age:23,DOB:'06-Jun-1999',email:'lucas@gmail.com',company:'Gemini'}
];
let headers = ['Name','Age','DOB','Email','Company'];

btnGet.addEventListener('click', () => {
    let table = document.createElement('table');
    let headerRow = document.createElement('tr');
    

    headers.forEach(headerText => {
        let header = document.createElement('th');
        let textNode = document.createTextNode(headerText);
        header.appendChild(textNode);
        headerRow.appendChild(header);
    });

    table.appendChild(headerRow);

    employees.forEach(emp => {
        let row = document.createElement('tr');

        Object.values(emp).forEach(text => {
            let cell = document.createElement('td');
            let textNode = document.createTextNode(text);
            cell.appendChild(textNode);
            row.appendChild(cell);
        })

        table.appendChild(row);
    });

    myTable.appendChild(table);

    
    table.setAttribute("border" , "2");
    table.setAttribute("cellpadding" , "10");
    // document.getElementById("table").style.alignItems = "center";
    // document.querySelector("#container").style.height = "100vh";
    // document.querySelector("#container").style.width = "100%";

    table.setAttribute("height" , "50vh");
    table.setAttribute("width" , "50%");
    

});

