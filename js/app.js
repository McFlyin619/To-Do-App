var x = 0;

function addToDo() {
    var text = $('#task-txt').val();
    
    // validation
    if (text!=""){

        // clear input
        $("#task-txt").val("");

        // create li
        var li = `
        <li id="${x}"><button class="btn" onclick="deleteToDo(${x});">Completed</button> ${text}</li>
        `;

        x += 1;

        $('#pending-list').append(li);

        // Displays Alert and closes alert automatically
        $('.alert2').fadeIn(1200);
        setTimeout(function() {
            $('.alert2').fadeOut(1800); 
        }, 1800);
        
    } else {
        // Displays Alert and closes alert automatically
        $('.alert1').fadeIn(1200);
        setTimeout(function() {
            $('.alert1').fadeOut(1500);
        }, 3000);
    }
    $('#task-txt').focus();
}

$('.alert1').hide();
$('.alert2').hide();
$('.alert3').hide();



function deleteToDo(id) {
    console.log("delete function")
    $('#'+id).remove();
    $('.alert3').fadeIn(1200);
    setTimeout(function(){
        $('.alert3').fadeOut(1500)
    },1800);

}

// Execute this function 

function init() {

    console.log('Init To Do App');
    // sensing user actions/events
    $('#add-task').click(addToDo);

    $("#task-txt").keypress(function(e){
        console.log(e.key);
        if(e.key === "Enter"){
            addToDo();
        }
    });

}

// when the broswer finishes rendering HTML, execute init

window.onload = init;