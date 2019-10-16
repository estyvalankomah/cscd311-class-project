$(document).ready(function () {
    $('.login').submit(function (e) {
        e.preventDefault();
        //check the fields
        let id = $('#id').val();
        let pin = $('#pin').val();
 
        if(id == ''){
            $('#id').css('border','1px solid #f00')
        }else if(pin == ''){
            $('#id').css('border-bottom','1px solid #b2b2b2');
            $('#pin').css('border-bottom','1px solid #f00')
        }else{
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

                        setTimeout(()=>{
                            window.location.href = 'student.html'
                        },2000);
                    }
                },
                error:function (err) {
                    alert(err.responseJSON.error);
                }
            })
        }
    });
});