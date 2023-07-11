let mapAsync = (arr, fun) => {
    return new Promise((resolve,reject)=>{
        let promises = arr.map((element)=>{
            return fun(element);
        })
        Promise.all(promises).then((resolvedArray)=>{
            resolve(resolvedArray);
        }).catch(err=>{
            reject(err)
        })
    })
}