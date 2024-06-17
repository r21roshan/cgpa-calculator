function convert4(){
    let sem1Val = Number(document.getElementById("f1").value)
    let sem2Val = Number(document.getElementById("f2").value)
    let sem3Val = Number(document.getElementById("f3").value)
    let sem4Val = Number(document.getElementById("f4").value)
    let cgpaVal = (sem1Val+sem2Val+sem3Val+sem4Val)/4
    // let cgpaVal = Number.parseFloat(sem1Val+sem2Val+sem3Val+sem4Val)/4
    let resultVal = document.getElementById("result4") 
    resultVal.innerHTML = cgpaVal + " cgpa"
}
function convert6(){
    let sem1Val = Number(document.getElementById("s1").value)
    let sem2Val = Number(document.getElementById("s2").value)
    let sem3Val = Number(document.getElementById("s3").value)
    let sem4Val = Number(document.getElementById("s4").value)
    let sem5Val = Number(document.getElementById("s5").value)
    let sem6Val = Number(document.getElementById("s6").value)
    let cgpaVal = (sem1Val+sem2Val+sem3Val+sem4Val+sem5Val+sem6Val)/6
    // let cgpaVal = Number.parseFloat(sem1Val+sem2Val+sem3Val+sem4Val+sem5Val+sem6Val)/6
    let resultVal = document.getElementById("result6") 
    resultVal.innerHTML = cgpaVal + " cgpa"
}
function convert8(){
    let sem1Val = Number(document.getElementById("e1").value)
    let sem2Val = Number(document.getElementById("e2").value)
    let sem3Val = Number(document.getElementById("e3").value)
    let sem4Val = Number(document.getElementById("e4").value)
    let sem5Val = Number(document.getElementById("e5").value)
    let sem6Val = Number(document.getElementById("e6").value)
    let sem7Val = Number(document.getElementById("e7").value)
    let sem8Val = Number(document.getElementById("e8").value)
    let cgpaVal = (sem1Val+sem2Val+sem3Val+sem4Val+sem5Val+sem6Val+sem7Val+sem8Val)/8
    // let cgpaVal = Number.parseFloat(sem1Val+sem2Val+sem3Val+sem4Val+sem5Val+sem6Val+sem7Val+sem8Val)/8
    let resultVal = document.getElementById("result8") 
    resultVal.innerHTML = cgpaVal + " cgpa"
}
function convert14(){
    let sem1Val = Number(document.getElementById("f11").value)
    let sem2Val = Number(document.getElementById("f12").value)
    let sem3Val = Number(document.getElementById("f13").value)
    let sem4Val = Number(document.getElementById("f14").value)
    let cgpaVal = ((sem1Val+sem2Val+sem3Val+sem4Val)/4)/9.5
    // let cgpaVal = Number.parseFloat((sem1Val+sem2Val+sem3Val+sem4Val)/4)/9.5
    let resultVal = document.getElementById("result14") 
    resultVal.innerHTML = cgpaVal + " cgpa"
}
function convert16(){
    let sem1Val = Number(document.getElementById("s11").value)
    let sem2Val = Number(document.getElementById("s12").value)
    let sem3Val = Number(document.getElementById("s13").value)
    let sem4Val = Number(document.getElementById("s14").value)
    let sem5Val = Number(document.getElementById("s15").value)
    let sem6Val = Number(document.getElementById("s16").value)
    let cgpaVal = ((sem1Val+sem2Val+sem3Val+sem4Val+sem5Val+sem6Val)/6)/9.5
    // let cgpaVal = Number.parseFloat((sem1Val+sem2Val+sem3Val+sem4Val+sem5Val+sem6Val)/6)/9.5
    let resultVal = document.getElementById("result16") 
    resultVal.innerHTML = cgpaVal + " cgpa"
}
function convert18(){
    let sem1Val = Number(document.getElementById("e11").value)
    let sem2Val = Number(document.getElementById("e12").value)
    let sem3Val = Number(document.getElementById("e13").value)
    let sem4Val = Number(document.getElementById("e14").value)
    let sem5Val = Number(document.getElementById("e15").value)
    let sem6Val = Number(document.getElementById("e16").value)
    let sem7Val = Number(document.getElementById("e17").value)
    let sem8Val = Number(document.getElementById("e18").value)
    let cgpaVal = ((sem1Val+sem2Val+sem3Val+sem4Val+sem5Val+sem6Val+sem7Val+sem8Val)/8)/9.5
    // let cgpaVal = Number.parseFloat((sem1Val+sem2Val+sem3Val+sem4Val+sem5Val+sem6Val+sem7Val+sem8Val)/8)/9.5
    let resultVal = document.getElementById("result18") 
    resultVal.innerHTML = cgpaVal + " cgpa"
}