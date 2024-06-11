let count=0;
const incrementCount = (num) => {
    
try{
    console.log (count)
    count++
    incrementCount()
} catch (error) {
    console.error (error)
    console.log (count)
}}
incrementCount();

//const flattenArray = (arr) => { 

    function flattenArr(arr){
        const givenArr = arr.flat()
        try{
            console.log(givenArr.flat())
            flattenArr(arr)
        } catch(e){
            console.error(e)
            console.log(e)
        }
     
    }
     
     
     
    console.log(flattenArr([[1], [2], [3]]))

//}
