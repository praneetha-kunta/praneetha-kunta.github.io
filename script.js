var data1={image : "http://4.bp.blogspot.com/_445R3_lKy7g/TDmiSyspRsI/AAAAAAAABoY/ZsyQSEMZrYQ/s1600/Dr-APJ-Abdul-Kalam-speech.jpg", name : "APJ abdul kalam" ,designation : "former president of india"};
var data2={image : "https://assets.website-files.com/5f34328036a27c22711defb7/5f4d16eb0fa1605dfe34d9b9_nick-v-2.jpg", name : "Pranitha" ,designation : "Software Developer"};
var isdata1=true;
var displaydata;
var changemypic = function(){
    if(isdata1)
    {
        displaydata=data2;
        isdata1=false;
    }
    else
    {
        displaydata=data1;
        isdata1=true;
    }
    document.getElementById("myimage").src= displaydata.image;
    document.getElementById("myname").innerHTML=displaydata.name;
    document.getElementById("mydesig").innerHTML=displaydata.designation;
}