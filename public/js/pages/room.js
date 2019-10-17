$(document).ready(function () {
    function getHalls(){
        $.ajax({
            method:'get',
            url:'http://localhost:5000/api/getHalls',
            success:function (data) {
                if(data.ok){
                    data.data.map(function (hall, i) {
                        $('.hall').append(`
                            <option value="${hall._id}">${hall.hallName}</option>
                        `)
                    });
                }
            },
            error:function (err) {
                console.log(err);
            }
        })
    }
    getHalls();

    function getBlocks(selectedhall){
        $.ajax({
            method:'get',
            url:`http://localhost:5000/api/getBlocks?hall=${selectedhall}`,
            success:function (data) {
                if(data.ok){
                    $('.block').children().remove();
                    $('.block').append(`
                           <option value="">Please select block</option>
                        `)
                    data.data.map(function (block, i) {
                        $('.block').append(`
                            <option value="${block._id}">${block.blockName}</option>
                        `)
                    });
                }
            },
            error:function (err) {
                console.log(err);
            }
        })
    }

    $("select.hall").change(function(){
        let selectedhall = $(this).children("option:selected").val();
        getBlocks(selectedhall);
    });

    function getRooms(selectedBlock){
        $.ajax({
            method:'get',
            url:`http://localhost:5000/api/getRooms?block=${selectedBlock}`,
            success:function (data) {
                if(data.ok){
                    $('.room').children().remove();
                    $('.room').append(`
                           <option value="">Please select room</option>
                        `)
                    data.data.map(function (room, i) {
                        $('.room').append(`
                            <option value="${room._id}">${room.roomNo}</option>
                        `)
                    });
                }
            },
            error:function (err) {
                console.log(err);
            }
        })
    }

    $("select.block").change(function(){
        let selectedBlock = $(this).children("option:selected").val();
        getRooms(selectedBlock);
    });    

    function submitForm(selectedRoom,id){
            $.ajax({
                method:'post',
                url:'http://localhost:5000/api/selectRoom',
                dataType:'json',
                data:{
                    studentID:id,
                    room:selectedRoom
                },
                success:function (data) {
                    if(data.ok == true){
                        console.log(data.data)
                        localStorage.setItem('student',JSON.stringify(data.data));
                        let student = JSON.parse(localStorage.getItem('student'));
                        console.log(student)
                        setTimeout(() =>{
                            window.location.href = 'student.html'
                        },8000)
                           
                    }
                },
                error:function (err) {
                    alert(err.responseJSON.error);
                }
            })
    }
    
    $("select.room").change(function(){
        let selectedRoom = $(this).children("option:selected").val();

        $('#room').submit(function (e) {
            e.preventDefault();
            let student = JSON.parse(localStorage.getItem('student'));
            let id = student.studentID;

            // console.log(student)
            submitForm(selectedRoom,id);
            
    
        });
    })
});
