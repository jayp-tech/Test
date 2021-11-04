$(document).ready(function (){

    var user = ''
    $("#form").submit(function (event){
        user =''
        event.preventDefault()
        var username = $("#username").val()
        searchUsers(username)
    })
    
    function searchUsers(username){
        
        $("#user").empty()
        console.log("HELLO!")
        $.get("https://api.github.com/search/users?q=" + username + "in:user", function(data){
           console.log(data)
          
        data.items.forEach(item =>{
            user = `<div class="profile-info" style="display: flex; margin: 10px 0 10px 0"><a href= "https://www.github.com/${username}"> <img class = "img-thumbnail ml-4" width="100" height="100" src ="${item.avatar_url}"/> </a> <h1 style=" font-size: 15px; margin-left:10px" > Username: ${item.login} </h1></div>`
            $("#result").append(user)
        })
  
       
        })    
    }
}
)