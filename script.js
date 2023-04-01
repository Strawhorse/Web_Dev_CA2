// Function for slideshow, with index variables initialised at start

let slideIndex = 0;
showSlides();
function showSlides() {
  let i;
//  pick out the myslides class which all the movies have
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
//  iterate through slides object
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1};
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 3500); // Change image every 3.5 seconds
}


//jquery function to read in xml and create table in the left hand flex column
 $(document).ready(function() {

        $('#tableBody').empty();
        //ajax call to load XML and parse it
        $.ajax({
            type: 'GET',
            url: 'movies.xml',
            dataType: 'xml',
            success: function(xml) {
               //find all movie tags, loop through them and append to table body on page
                $(xml).find('movie').each(function() {

                    // Append new data to the table body element by creating each row below
                    $('#tableBody').append(
                        '<tr>' +
                            '<td>' +
                                $(this).find('Name').text() + '</td> ' +
                            '<td>' +
                                $(this).find('Genre').text() + '</td> ' +
                            '<td>' +
                                $(this).find('Cast').text() + '</td> ' +
                            '<td>' +
                                $(this).find('Year').text() + '</td> '+
                        '</tr>'
                        );
                });
            }
        });
});

//Search function for movie table on main page
// First search is for movie names
function movieNameSearch() {
  // Declare variables to search through
  var input, filter, table, tr, td, i, txtValue;
//  select input element by id
  input = document.getElementById("myInput1");
  filter = input.value.toUpperCase();
  table = document.getElementById("tableBody");
  tr = table.getElementsByTagName("tr");

  // Loop through all table rows, hide those who don't match search; tr elements created by jquery
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}

// Second search is for actor names
function movieCastSearch() {
  // Declare variables to search through
  var input, filter, table, tr, td, i, txtValue;
//  select input element by id
  input = document.getElementById("myInput2");
  filter = input.value.toUpperCase();
  table = document.getElementById("tableBody");
  tr = table.getElementsByTagName("tr");

  // Loop through all table rows, hide those who don't match search; tr elements created by jquery
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[2];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}



