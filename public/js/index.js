$(window).on('load',function(){
    $('#exampleModal').modal('show');
    // $.notify("Hello World");
});

var subjects = [
        {
            subject: 'Computer',
            link: 'https://meet.google.com/computer',
            teacher: 'Er. S Babu',
            image: 'images/13.jpg'
        },
        {
            subject: 'English',
            link: 'https://meet.google.com/english',
            teacher: 'Dr. S Sameehah',
            image: 'images/17.jpg'
        },
        {
            subject: 'Science',
            link: 'https://meet.google.com/science',
            teacher: 'Er. Gobi M',
            image: 'images/11.jpg'
        },
        {
            subject: 'Hindi',
            link: 'https://meet.google.com/hindi',
            teacher: 'Mr. M Sureshkumar',
            image: 'images/14.jpg'
        },
        {
            subject: 'Mathematics',
            link: 'https://meet.google.com/maths',
            teacher: 'Mrs. Annie U',
            image: 'images/15.jpg'
        },        
        {
            subject: 'Social Studies',
            link: 'https://meet.google.com/s-science',
            teacher: 'Dr. S Sameehah',
            image: 'images/12.jpg'
        }
       
];
var slots =[
    {
        slot: '08:00 - 08:55',
        image: 'images/13.jpg'
    },
    {
        slot: '09:00 - 09:55',
        image: 'images/14.jpg'
    },
    {
        slot: '10:00 - 10:55',
        image: 'images/16.jpg'
    },
    {
        slot: '11:00 - 11:55',
        image: 'images/11.jpg'
    },
    {
        slot: '01:00 - 01:55',
        image: 'images/13.jpg'
    },
    {
        slot: '02:00 - 02:55',
        image: 'images/15.jpg',

    }
]
// alert($(".currentDay").html())
function randomize(day,arr=[]){
    if(day=="Mon")
        arr.push(6,5,4,3,2,1)
    else if(day=="Tue")
        arr.push(3,4,1,6,5,2)
    else if(day=="Wed")
        arr.push(2,3,5,4,1,6)
    else if(day=="Thu")
        arr.push(4,1,6,3,2,5)
    else if(day=="Fri")
        arr.push(5,4,1,6,2,3)   
    else
        arr.push(6,5,4,3,2,1)    
}


var weekday=new Array(5);
weekday[0]="Sun";
weekday[1]="Mon";
weekday[2]="Tue";
weekday[3]="Wed";
weekday[4]="Thu";
weekday[5]="Fri";
weekday[6]="Sat";

var d = new Date();
var n = weekday[d.getDay()];
// alert(d.getDay()-1)
// alert("span#"+n)
let Day=[]
$("#"+n).addClass("today")

$("#"+n).addClass("currentDay")
   
randomize(n,Day);

if(n=="Sat"||n=="Sun"){
    n = "Mon";
    $("#Mon").addClass("nextDay");
    $("#Mon").addClass("currentDay");
}
let len = subjects.length;
len-=1;
for (var i=len; i>=0; i--){
        
        $("section#index").append(
                `<div class="col-xl-12 ">
                        <div class="card">
                        <img class="card-img" src="${subjects[Day[i]-1].image}" alt="subject">
                        <div class="card-img-overlay text-white ">
                            <h4 class="card-title">${subjects[Day[i]-1].subject}</h4>
                            <a href="${subjects[Day[i]-1].link}" target="_blank" class="card-link">${subjects[Day[i]-1].link}</a>
                            <h6 class="card-subtitle mb-2">${subjects[Day[i]-1].teacher}</h6>
                            <p class="card-text">SLOT: ${slots[len-i].slot}</p>
                        </div>
                        </div>
                    </div>`
            )
    
    }


$("#days span").click(function(){
    let day = $(this).html(),Day=[];

    randomize(day,Day);
            
    $("#days span").removeClass("currentDay")
    $(this).toggleClass("currentDay")
    $("section#index").empty();
    for (var i=len; i>=0; i--){
        $("section#index").append(
                `<div class="col-xl-12 ">
                        <div class="card">
                        <img class="card-img" src="${subjects[Day[i]-1].image}" alt="subject">
                        <div class="card-img-overlay text-white ">
                            <h4 class="card-title">${subjects[Day[i]-1].subject}</h4>
                            <a href="https://meet.google.com/sqb-rzrs-jee" target="_blank" class="card-link">https://meet.google.com/sqb-rzrs-jee</a>
                            <h6 class="card-subtitle mb-2">${subjects[Day[i]-1].teacher}</h6>
                            <p class="card-text">SLOT: ${slots[len-i].slot}</p>
                        </div>
                        </div>
                    </div>`
            )
    }
})




$(window).on('load',function(){
    // $('#myModal').modal('show');
    setTimeout(function(){
        $('#myModal').modal('show');
   }, 0);
   $('#myModal').modal({
        backdrop: 'static',
        keyboard: false
    })
});

$(".welcomeUser").attr("disabled","true");
$("#human").attr("disabled","true");

$("#studentClass").focusout(function() {
    var stdClass = $("#studentClass").val();
    // alert(parseInt(stdClass))
    if(parseInt(stdClass)<=6){
        if($("#name").val()!= '' && $("#studentClass").val()!= ''){
            // alert("hi")
            $("#human").removeAttr("disabled");
            $("#human").click(function(){
                $(".welcomeUser").removeAttr("disabled");
                $.notify("Verified successfully!",{ position:"top left",className: "success",showAnimation: 'slideDown',autoHideDelay: 1500  });
            })

            $("#class #human").notify("Click here!",{ position:"top left",className: "info",showAnimation: 'slideDown',autoHideDelay: 1500  });
        }
    }
    else{
        // alert("You're too old for this!")
        $.notify("You're too old for this!",{ position:"top left",className: "error"  });
    }
        
  })
  $(".welcomeUser").click(function(){
    var name = $("#name").val();
    setTimeout(function(){
        $('#myModal2').modal('show');
   }, 2500);
    $(".welcome").empty();
    $(".welcome").append("Hello! "+name);
})

