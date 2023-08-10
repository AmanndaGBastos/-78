var images =["https://i.pinimg.com/736x/ca/75/57/ca755743e236ed3092ea78278f2d90e9--taylor-lautner-taylor-swift.jpg","https://image.tmdb.org/t/p/original/fpaxCUZEpBHtg6HuXjjJPf0tep9.jpg",
"https://static.billboard.com/files/2020/08/taylor-swift-2019-cats-premiere-akl-billboard-1548-1596478591-compressed.jpg","https://www.hawtcelebs.com/wp-content/uploads/2018/08/joey-king-at-hfpa-annual-grants-banquet-in-beverly-hills-08-09-2018-2.jpg"
];
var names = [" Álbum da familia ","Lautner e Swift","Taylor Lautner","Taylor Swift","Joey Lautner Swift"];

 var i = 0;
 function update(){
    i++;
    var numbersOfFamilyMemberInArrays= 3
    if(i > numbersOfFamilyMemberInArrays ) {
      i= 0;
   }
   var updatedImage=images[i];
var updatedName = names[i];
document.getElementById("familyMemberImage").src = updatedImage
document.getElementById("familyMemberImage").innerHTMl = updatedName
   }
 
