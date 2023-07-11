let createCounter = (ini)=>{
    if( ini === undefined ) ini = 0;
    let counter = ini;
    function increase(){
        counter++
        return counter;
    }
    return increase;
}