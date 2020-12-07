$(document).ready(function(){
    var csrftokken=$("input[name=csrfmiddlewaretoken]").val();
	console.log(csrftokken);
    $("#CreateButton").click(function(){
	  var serializedData=$("#CreateTaskForm").serialize();
	  $.ajax({
	  
	    url:$("#CreateTaskForm").data('url'),
		data:serializedData,
		type:'post',
		success:function(response){
		  $("#TaskList").prepend('<div class="card mb-3" id="'+response.task.id+'"><div class="card-body">' +response.task.title+ '<button type="button" class="close float-right" id="'+response.task.id+'"><span aria-hidden="true">&times;</span></button></div></div>')
		}
		
	  })
	  
	  $("#CreateTaskForm")[0].reset();
	  
	});
	
	$("#TaskList").on("click","button.close",function(){
	
	
    var id =  this.id ; 
    var href = id+'/delete/';
    
    console.log(href)  // get href from link

    $.ajax({
        url: href,
        data:{'id':id,'csrfmiddlewaretoken':csrftokken},
		type:'post',
		success:function(response){
		  $("#"+id).fadeOut(100);
		}
		
    });
	
	

    
	

  }); 
	
	
	
	
	
	
		 
	
	
});