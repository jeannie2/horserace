var img = document.querySelector("img");
var i = 1;

console.log("Use your left and right arrow keys");

/* btw 1 and 15. skip 16.jpg for both */
document.addEventListener("keydown", function(event){ /*event is an objectif no event, keycode undefined */
    if(event.keyCode===39) { /* right arrow */
        if (i <= 14) { /* rather than i !== 14 -> altho wont go higher than 14, still more clear */
            i++;
        } else { 
            i=1;
        }
        img.src = "imgs/" + i + ".jpg";  
    }  
});

document.addEventListener("keydown", function(event){ 
    if(event.keyCode===37) { /* left arrow */
        if (i >= 2) { 
           i--;
        } else {
            i=15; 
        }
        img.src = "imgs/" + i + ".jpg";  
    };
});

/* if(event.keyCode===39) { /* right */
    /*if (i >= 11) {
        i = 1;
    } 
    i++;
    img.src = "imgs/" + i + ".jpg";
}
}
}
});

/*img.addEventListener("click", function() {
    console.log("blonk"); */
