const btn = document.querySelector(".btn");
const d1 = document.querySelector(".d1");
const d2 = document.querySelector(".d2");
const d3 = document.querySelector(".d3");
const d4 = document.querySelector(".d4");
const d5 = document.querySelector(".d5");
const d6 = document.querySelector(".d6");

function roll(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

function reset()
{
    d6.classList.remove("invisible");
    d2.classList.remove("invisible");
    d3.classList.remove("invisible");
    d4.classList.remove("invisible");
    d5.classList.remove("invisible");
    d1.classList.remove("invisible");

}


function change()
{
    let value = roll(1,7);
    if(value==1)
    {
        reset();
        d6.classList.add("invisible");
        d2.classList.add("invisible");
        d3.classList.add("invisible");
        d4.classList.add("invisible");
        d5.classList.add("invisible");
    }


    else if(value==2)
    {
        reset();
        d2.classList.add("invisible");
        d3.classList.add("invisible");
        d5.classList.add("invisible");
        d6.classList.add("invisible");
    }

    else if(value==3)
    {
        reset();
        d4.classList.add("invisible");
        d5.classList.add("invisible");
        d6.classList.add("invisible");
    }

    else if(value==4)
    {
        reset();
        d6.classList.add("invisible");
        d3.classList.add("invisible");
    }

    else if(value==5)
    {
        reset();
        d5.classList.add("invisible");

    }

    else if(value==6)
    {
        reset();
    }

}


btn.addEventListener("click", change);