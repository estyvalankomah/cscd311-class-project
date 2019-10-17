$(document).ready(function () {
    $.ajax({
        method:'get',
        url:'http://localhost:5000/api/displayHalls',
        success:function (data) {
            if(data.ok == true){
                data.data.map(function (student, i) {
                    $('.hallBody').append(`
                        <tr>
                            <td>${student.studentID}</td>
                            <td>${student.studentName}</td>
                            <td>${student.hall}</td>
                            <td>${student.block}</td>
                            <td>${student.room}</td>
                        </tr>
                    `)
                });
            }
        },
        error:function (err) {
            alert(err.responseJSON.error);
        }
    })        
});