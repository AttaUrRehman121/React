function Random ()
{

    let Number = Math.random() * 100;


return <h1 style={{'background':'SkyBlue' , 'font-size':'20px'}}>this Some Randome Number : {Math.round(Number)}</h1>
//  user { } to write dynamic code 
}


export default Random;