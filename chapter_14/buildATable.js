  document.addEventListener("DOMContentLoaded", function(event){

  const MOUNTAINS = [
    {name: "Kilimanjaro", height: 5895, place: "Tanzania"},
    {name: "Everest", height: 8848, place: "Nepal"},
    {name: "Mount Fuji", height: 3776, place: "Japan"},
    {name: "Vaalserberg", height: 323, place: "Netherlands"},
    {name: "Denali", height: 6168, place: "United States"},
    {name: "Popocatepetl", height: 5465, place: "Mexico"},
    {name: "Mont Blanc", height: 4808, place: "Italy/France"}
  ];

  // Your code here
  // 

  function createTable(topic) {
    let keys = Object.keys(topic[0]);
    let mountainsDiv = document.getElementById("mountains");
    let table = document.createElement("table");
    mountainsDiv.appendChild(table);
    let row = document.createElement("tr");
    let addRow = table.appendChild(row);

    for(let thName of keys){
      let newTh = document.createElement("th");
      let newContent = document.createTextNode(thName);
      let title = newTh.appendChild(newContent);
      row.appendChild(newTh);
    }
    for(let obj of topic){
      let newRow = table.insertRow(-1);
      for(let column of keys){
        let newTd = document.createElement("td");
        let newInfo = document.createTextNode(obj[column]);
        let item = newTd.appendChild(newInfo);
        if(!(isNaN(obj[column]))){
          // newTd.classList.add("right-align");
          // let rightAlign = document.getElementsByClassName("right-align")[0];
          newTd.style.textAlign = "right";
        }
        newRow.appendChild(newTd);
      }
    }

  }



  createTable(MOUNTAINS);

});
