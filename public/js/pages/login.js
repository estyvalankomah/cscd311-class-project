$(document).ready(function () {

    $('.login').submit(function (e) {
        e.preventDefault();
        let id = $('#id').val();
        let pin = $('#pin').val();

        $.ajax({
            method:'post',
            url:'http://localhost:5000/api/login',
            dataType:'json',
            data:{
                studentID:id,
                studentPin:pin
            },
            success:function (data) {
                if(data.ok == true){
                    localStorage.setItem('student',JSON.stringify(data.data));
                    alert('Login successful');
                    window.location.href = 'student.html';
                }
            },
            error:function (err) {
                alert(err.responseJSON.error);
            }
        })
    });
});