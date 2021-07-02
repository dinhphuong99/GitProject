var path1 = ["img/Cat/funny-cat1_part1x1.jpg" , "img/Monkey/monkey_part1x1.jpg", "img/Panda/panda_swap_part1x1.jpg"];

var path2 = ["img/Cat/funny-cat1_part2x1.jpg" , "img/Monkey/monkey_part2x1.jpg", "img/Panda/panda_swap_part2x1.jpg"];

var path3 = ["img/Cat/funny-cat1_part3x1.jpg" , "img/Monkey/monkey_part3x1.jpg", "img/Panda/panda_swap_part3x1.jpg"];

var path4 = ["img/Cat/funny-cat1_part4x1.jpg" , "img/Monkey/monkey_part4x1.jpg", "img/Panda/panda_swap_part4x1.jpg"];

var path5 = ["img/Cat/funny-cat1_part5x1.jpg" , "img/Monkey/monkey_part5x1.jpg", "img/Panda/panda_swap_part5x1.jpg"];

var num = Math.floor((Math.random() * 2) + 0);
var num2 = Math.floor((Math.random() * 2) + 0);
var num3 = Math.floor((Math.random() * 2) + 0);
var num4 = Math.floor((Math.random() * 2) + 0);
var num5 = Math.floor((Math.random() * 2) + 0);

function Random(){
    document.getElementById("img1").src = path1[num];
    document.getElementById("img2").src = path2[num2];
    document.getElementById("img3").src = path3[num3];
    document.getElementById("img4").src = path4[num4];
    document.getElementById("img5").src = path5[num5];
}
function ImageTop1(){
    num++;
    if(num >= path1.length){
        num = 0;
    }

    document.getElementById("img1").src = path1[num];
}

function ImageTop2(){
    num2++;
    if(num2 >= path2.length){
        num2 = 0;
    }

    document.getElementById("img2").src = path2[num2];
}

function ImageTop3(){
    num3++;
    if(num3 >= path3.length){
        num3 = 0;
    }

    document.getElementById("img3").src = path3[num3];
}

function ImageTop4(){
    num4++;
    if(num4 >= path4.length){
        num4 = 0;
    }

    document.getElementById("img4").src = path4[num4];
}

function ImageTop5(){
    num5++;
    if(num5 >= path5.length){
        num5 = 0;
    }

    document.getElementById("img5").src = path5[num5];
}