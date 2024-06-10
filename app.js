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
incrementCount()