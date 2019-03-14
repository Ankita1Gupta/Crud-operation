function deleteQues(qid,element)
{
quesArray=JSON.parse(localStorage.getItem('ques'));
for(var i=0;i<quesArray.length;i++)
{
  if(quesArray[i].uid==qid)
  {
    quesArray.splice(i,1);
    localStorage.setItem('ques', JSON.stringify(quesArray));
    break;
  }
}
var div=document.getElementById('quesList');
div.removeChild(element.parentNode.parentNode);

}
function editQues(qid)
{
  window.location.replace("form.html?id="+qid);
}

function fetchData() {
  var ques = JSON.parse(localStorage.getItem('ques'));
  if(!ques)
  {
    ques=[];
  }
  var quesList = document.getElementById('quesList');

  

  for (var i = 0; i < ques.length; i++) {
   
    var title=ques[i].title;
    var id=ques[i].uid;
    var desc =ques[i].description;
    var options =ques[i].options;
     var html="";
     for(j=0;j<options.length;j++)
                             {
                              html+='<li class="bg-info">'+
                              '<h4>'+options[j]+'</h4>'+ 
                              '</li>';

                             }
    quesList.innerHTML +=   '<div class="well">'+
            
                              '<p><span class="label label-success">' + title + '</span></p>'+
                              '<h4>' + desc + '</h4>'+
                              '<ol type="A">'+
                                html+
                             '</ol>'+
                             '<div class="btn-toolbar">'+
                             '<button onclick="deleteQues(\''+id+'\',this)" class="btn btn-danger"><span class="glyphicon glyphicon-trash"></span>Delete</button>'+
                              '<button onclick="editQues(\''+id+'\')" class="btn btn-info"><span class="glyphicon glyphicon-pencil"></span>Edit</button>'+
                              '</div>'+
                              '</div>';
  }


}
