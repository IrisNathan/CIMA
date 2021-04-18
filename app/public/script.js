


const todoUrl = 'http://localhost:3000/dashboard'


// Delete - DELETE
$('ul').on('click', 'span', function(event){
    event.stopPropagation();
    var self = this; 
    console.log('I am self: ', self)
    
    var thisId = $(this).parent().data('id');
    console.log('I am the id ', thisId)
    var url = `${todoUrl}/${thisId}`;
    $.ajax({
        url: url,
        method: 'DELETE',
    })
    .done(function(){
        $(self).parent().remove(); // removes the li element of the span clicked in browser
    })
    .fail(function(err){
        console.log('Delete failed with error ', err)
    });
  });
  