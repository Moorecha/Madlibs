function done()  {

  let noun= document.getElementById("noun").value;
  let body= document.getElementById("body").value;
  let verb= document.getElementById("verb").value;
  let animal= document.getElementById("animal").value;
  let edverb= document.getElementById("edverb").value;
  let ingverb= document.getElementById("ingverb").value;

  document.getElementById("form").innerHTML =  " I was <span class='name'>" + " " + " " + ingverb + " down the hallway and some " + " " + noun + "grabbed my" + " " + body + ", and I turned to him and said 'so help me, if you'"+ " " + verb +  "me again you will go the way of the" + " " + animal + "And then he" + " " + edverb + "away." };
