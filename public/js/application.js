$(document).ready(function(){
  $("#get_color").on('click', function(e){
    e.preventDefault;
    $.ajax({
      url: '/color',
      type: 'post'
    }).done(function(server_response){
      console.log(server_response);
      var cell_num = server_response.cell;
      var cell_color = server_response.color;
      $('#color_me li:nth-child(' + cell_num + ')').css( "background-color", cell_color );
    });
  });
});

// pseudocode
  // bind to the event of clicking the href
  
  // on click, prevent default behavior (ie reloading the page)
    // aside: the "on" method takes an action as first param
    // and a function as the 2nd param, and if the function itself
    // has an argument, that argument is the event that triggered
    // the function.. i.e. clicking.   
  
  // then, call the ajax function, which takes as parameters  
  // the url that "it's looking for"
  // the method (verb) it's associated with
  // optional other args (such as data, which is the data)
  // that we are looking for, i.e. form submission etc.
  // so you'd have to run .serialize() on that if that's what you need

  // then call the .done function on the ajax call
  // which itself takes as an arg an unnamed function
  // whose argument is the server's response
  // and do something with that response 
  // i.e. put it into the dom

  // note how cell_num had to be passed in (closing the quotes and reopening them. 
  
