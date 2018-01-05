function gpacalc()
{

 try{

    if($("#sname").val() == "" ) throw alert("Name should not be empty!!");
    if($("#course1").val() == "" ) throw alert("Course1 grade should not be empty!!");
    if($("#course2").val() == "" ) throw alert("Course2 grade should not be empty!!");
    if($("#course3").val() == "" ) throw alert("Course3 grade should not be empty!!");


    if($("#course1").val() == 'A' || 'B' || 'C' || 'D' || 'F' )
    {
        var grade1 = pointCal($("#course1").val());
    }else
    { 
    alert("Course1 grade is either A,B,C,D,F");
    }

    if($("#course2").val() == 'A' || 'B' || 'C' || 'D' || 'F' )
    {
        var grade2 = pointCal($("#course2").val());
    }else
    { 
    alert("Course2 grade is either A,B,C,D,F");
    }

    if($("#course3").val() == 'A' || 'B' || 'C' || 'D' || 'F' )
    {
        var grade3 = pointCal($("#course3").val());
    }else
    { 
    alert("Course3 grade is either A,B,C,D,F");
    }

   

    var totalGpa = cal(grade1,grade2,grade3);
    document.getElementById("total").innerHTML = totalGpa;
    alert(totalGpa);
     
     }catch(er)
    {
        
    }
    
    
  
}

function cal(grade1,grade2,grade3)
{
 var totalGpa = (grade1+grade2+grade3)/3;
 return totalGpa.toFixed(2);
}


function pointCal(g)
{
    switch(g)
    {
        case 'A':
             return 4;
             break;
        case 'B':
             return 3;
             break;
        case 'C':
             return 2;
        case 'D':
             return 1;
        case 'F':
            return 0;
    }
}