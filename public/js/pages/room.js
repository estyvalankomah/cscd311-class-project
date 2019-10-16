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
        if(selectedhall = ''){
            $('.hall').children.remove();
            return  $('.hall').append(`
                        <option value="">Please select hall</option>
                    `)
        }
        $.ajax({
            method:'get',
            url:'http://localhost:5000/api/getBlocks',
            dataType:'json',
            data:{
                hall:selectedhall
            },
            success:function (data) {
                if(data.ok){
                    console.log(data)
                    $('.block').children().remove();
                    $('.block').append(`
                           <option value="">Please select block</option>
                        `)
                    dat.data.map(function (block, i) {
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
        if(selectedBlock = ''){
            $('.block').children.remove();
            return  $('.block').append(`
                        <option value="">Please select block</option>
                    `)
        }
        $.ajax({
            method:'get',
            url:'http://localhost:5000/api/getRooms',
            dataType:'json',
            data:{
                block:selectedBlock
            },
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

    $("select .block").change(function(){
        let selectedBlock = $(this).children("option:selected").val();
        getRooms(selectedBlock);
    });    

    function submitForm(selectedRoom){
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
                        localStorage.setItem('student',JSON.stringify(data.data));
                        window.location.href = 'student.html'
                        
                    }
                },
                error:function (err) {
                    alert(err.responseJSON.error);
                }
            })
    }
    
    $("select .room").change(function(){
        let selectedRoom = $(this).children("option:selected").val();

        $('#room').submit(function (e) {
            e.preventDefault();
            let student = JSON.parse(localStorage.getItem('student'));
            let id = student.studentID;

            submitForm(selectedRoom,id);
    
        });
    })
});
