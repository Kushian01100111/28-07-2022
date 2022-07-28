function sumPairs(ints, s) {
    let check = ints
    let numbers = []
    let indexs = []
    
    for(let x = 0 ;x < ints.length; x++){
        for(let i = x ; i < check.length; i++){
            if((ints[x] + check[i + 1]) === s){
              numbers.push([ints[x],check[i + 1]])
              indexs.push([x,(i+1)])
            }
        }
    }
    
      

    let resultIndex ;
    if(indexs.length > 1){
        for(let i = 0; i < indexs.length - 1; i++){
            if(indexs[i][1] > indexs[i + 1][1]){
                resultIndex = i + 1
                break
            }
        }
        return numbers[resultIndex] || undefined ||numbers[0];
    }
   
   return numbers[0] || undefined;
  }

  sumPairs([1, 2, 3, 4, 1, 0], 2)