var lengthOfLongestSubstring = function(s) {
    let sarr=s.split('')
    let len=0
    for(let i=0;i<sarr.length;i++){
        let max=''
        for(let j=i;j<sarr.length;j++){
             max=max+sarr[j]
             if(max.length>len && duplicate(max)){
                len=max.length
             }
        }
    }
    return len
};

var duplicate=function(str){
    let strarr=str.split('')
    for(let i=0;i<strarr.length;i++){
        let value=strarr[i]
        for(let j=i+1;j<strarr.length;j++){
            if(strarr[j]===value) return false
        }
    }
    return true
}
