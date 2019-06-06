let sentence = ["The","walrus","danced","through","the","trees","in","the","light","of","the","moon"];

function addExcitement (theWordArray) {
    let buildMeUp = ""

    for (let i = 0; i < theWordArray.length; i++) {
        // console.log('value i:',i,'value i+1:',i+1,'value i % 3:',i%3,'value i+1%3:',(i + 1) %3);
        if ([i + 1] % 3 == 0) { //add 1 to i to start ! at third word
            buildMeUp += theWordArray[i] + "!"; 
        } else {
        buildMeUp += theWordArray[i] + " ";
        }
        console.log(buildMeUp);
    
    } 
}



addExcitement(sentence)