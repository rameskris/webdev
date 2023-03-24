const d=new Date();
const month=d.getMonth()

console.log(month)
switch(month){
    case 1:
        console.log("jan")
        break;
    
    case 2:
        console.log("Feb")
        break;
    
    case 3:
        console.log("March")
        break;

    default:
        console.log("Jan to Dec")
    
}