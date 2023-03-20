  console.log("It is working!");

  function setup(){
    noCanvas();
  }


  var rawText = "geometric phase can be defined for entirely different systems such as nonlinear dissipative systems that possess certain cyclic attractors. They showed that such cyclic attractors exist in a class of nonlinear dissipative systems with certain symmetries"
  var order = 4;
  var ngrams ={}

  function previewFile() {
  const content = document.querySelector(".content");
  const [file] = document.querySelector("input[type=file]").files;
  const reader = new FileReader();
 

  reader.addEventListener(
    "load",
    () => {
      // this will then display a text file
      content.innerText = reader.result;
      rawText = reader.result;


    },
    false
  );

  if (file) {
    reader.readAsText(file);
  }
}


function work(){
for(var i = 0; i <= rawText.length - order ; i++){
    var gram = rawText.substring(i, i + order);
    if(!ngrams[gram]){
        ngrams[gram]= [];
}
else{
        ngrams[gram].push(rawText.charAt(i + order));

}

  console.log(ngrams)

}
 markov();
}

 

function markov(){


        var currentGram = rawText.substring(0, order);
        var result =currentGram;

        for(var i = 0 ; i <50 ; i++){
        var possibilities = ngrams[currentGram];
        if(!possibilities){
            break;
        }
        var random = Math.floor(Math.random() * possibilities.length );
        console.log("possibilities: "+ possibilities);
        console.log("random:" + random)
        var next = possibilities[random];
        console.log("next "+ next);
        console.log(possibilities.length);
         result += next;
         currentGram = rawText.substring(result.length - order,result.length);
     }
        var len = result.len;
        currentGram =rawText.substring(len -order,len);
    
    const para = document.createElement("p");
    const node = document.createTextNode(result);
    para.appendChild(node);
    const element = document.getElementById("container-2");
    element.appendChild(para);

}