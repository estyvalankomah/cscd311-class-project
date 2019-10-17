$(document).ready(function () {
    let student = JSON.parse(localStorage.getItem('student'));

    $('#name').text(student.studentName);
    $('#id').text(student.studentID);
    $('#gender').text(student.gender);
    $('#course').text(student.course);
    $('#resStatus').text(student.residentialStatus);
    $('#hall').text(student.hall);
    $('#block').text(student.block);
    $('#room').text(student.room);

    if(student.residentialStatus == "Assigned"){
        $('#applyForRoom').attr('hidden',true);
    }else{
        $('#applyForRoom').click(function (e) {
            e.preventDefault();
            setTimeout(()=>{
                window.location.href = 'room.html'
            },2000);
        });
    }

    $('#viewHalls').click(function (e) {
        e.preventDefault();
        $.ajax({
            method:'get',
            url:'http://localhost:5000/api/displayHalls',
            success:function (data) {
                if(data.ok){
                    localStorage.setItem('studentHalls',JSON.stringify(data.data));
                    setTimeout(() =>{
                        window.location.href = 'hall.html'
                    },2000)
                    
                }
            },
            error:function (err) {
                console.log(err);
            }
        })
    })

    $('#logout').click(function () {
        localStorage.removeItem('user');
        alert('Logging out');

        setTimeout(()=>{
            window.location.href = 'login.html';
        },2000);
    })
});