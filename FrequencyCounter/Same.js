function Same( arr1,arr2){
//  console.log( arr1,arr2)

   if( arr1.length !== arr2.length) {
     return false 
   }
 for( i=0 ;i <arr1.length ;i++){
     let correctIndex = arr2.indexOf( arr1[i] ** 2)
     if( correctIndex === -1 )  return false 
     
    //  console.log(arr2)
    arr2.splice(correctIndex,1 )
 } 
  return true

}
 console.log(Same([1,2,3,4],[1,4,9,16] ))