function isSubsequence(s: string, t: string): boolean {
    let arrS = s.split("")
    let arrT = t.split("")

    for (let i = 0; i < arrT.length; i++) {
        let val = arrT[i];

        if (val == arrS[0]) {
            arrS.shift();
        }
    }
    return arrS.length == 0 
}