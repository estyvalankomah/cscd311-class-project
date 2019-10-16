$(document).ready(function () {
    $('.register').submit(function (e) {
        e.preventDefault();
        //check the fields
        let name = $('#name').val();
        let id = $('#id').val();
        let pin = $('#pin').val();
        let gender = $('input[name=gender]:checked', '.register').val()
        let course = $('#course').val();
 
        if(name == ''){
            $('#name').css('border','1px solid #f00')
        }else if(id == ''){
            $('#name').css('border-bottom','1px solid #b2b2b2')
            $('#id').css('border-bottom','1px solid #f00')
        }else if(pin == ''){
            $('#id').css('border-bottom','1px solid #b2b2b2');
            $('#pin').css('border-bottom','1px solid #f00')
        }else{
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
                        alert(`Registration successful<br /> ID: ${data.data.studentID} and PIN: ${data.auth.pin} `);
                    }else{
                         alert(JSON.stringify(data));
                    }
                },
                error:function (err) {
                    alert(err.responseJSON.error);
                }
            })
        }
    });
});