function bmi_calc(){
    height = document.getElementById("height").value;
    weight = document.getElementById("wight").value;

    //to convert it in cm
    height = height/100;

    const bmi = weight/(height*height);

    document.getElementById("bmi").value = bmi;
}

function hw_calc(){
    hip = document.getElementById("hip").value;
    waist = document.getElementById("waist").value;
    
    

    const hw = hip/waist;

    document.getElementById("hw").value = hw;
}