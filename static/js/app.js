// from data.js
var tableData = data;

//Create an event listener
document.getElementById("filter-btn").addEventListener("click", function() {
    //console.log("click button test");
    // get value of the date input field
    let filter_date = document.getElementById("datetime").value;
    console.log(filter_date);
    // call the showTable function with the date as a filter parameter
    showTable(filter_date);
});


function showTable(filter_date="") {

        let tableBody = document.getElementById("sparky");
    tableBody.innerHTML = "";  // Clear the table (per rubric)

    // Initialize a text object as an empty string, calling it "the_html"
    let the_html = "";

    // Create some html table code with JS
    tableData.forEach(function(x)
    {
        // Show row if no filter is set, OR (||) if filter_date == record date
        if (filter_date == "" || filter_date == x.datetime) {
            the_html += `<tr><td>${x.datetime}</td>`;
            the_html += `<td>${x.city}</td>`;
            the_html += `<td>${x.state}</td>`;
            the_html += `<td>${x.country}</td>`;
            the_html += `<td>${x.shape}</td>`;
            the_html += `<td>${x.durationMinutes}</td>`;
            the_html += `<td>${x.comments}</td>`;
            the_html += "</tr>\n";
        }
    });

    // Display (insert into) tbody section (.innerHTML assignment)    
    tableBody.innerHTML = the_html;
}


// Initial population of table (on first page load)
showTable();
