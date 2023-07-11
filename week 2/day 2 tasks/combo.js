let compose = (args) => {
    let exec = (val) => {
        let last = args[args.length-1].call(null,val)
        for( let i = args.length - 2; i >= 0; i-- ){
            last = args[i].call(null,last);
        }
        return last;
    }
    return exec;
}