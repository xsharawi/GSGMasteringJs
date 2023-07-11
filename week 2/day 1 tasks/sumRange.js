let sumRange = (l,r)=>{
    if( l > r ) [l,r] = [r,l];
    if( l === r ) return r;
    if( l + 1 <= r ){
        return l + sumRange(l+1, r);
    }
}