$(document).ready(function () {
    $('.register').submit(function (e) {
        e.preventDefault();
        let name = $('#name').val();
        let id = $('#id').val();
        let pin = $('#pin').val();
        let gender = $('input[name=gender]:checked', '.register').val()
        let course = $('#course').val();
 
        $.ajax({
            method:'post',
            url:'http://localhost:5000/api/registerStudent',
            dataType:'json',
            data:{
                studentName:name,
                studentID:id,
                studentPin:pin,
                gender:gender,
                course:course
            },
            success:function (data) {
                if(data.ok == true){
                    alert(`Student add successfully studentID is ${data.data.studentID} and studentPin is ${data.auth.pin} `);
                }else{
                     alert(JSON.stringify(data));
                }
            },
            error:function (err) {
                alert(err.responseJSON.error);
            }
        })
    });
});