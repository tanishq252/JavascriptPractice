const names = ["abc", "dsvsd", "sca", "popo"];

// for of loop (mostly arrays)
// for(const n of names){console.log(n);}

// for in loop (mostly objects)
const symb = {
    yt : "utube",
    ig : "insta",
    lk : "linkedIn"
}

for(const n in symb){console.log(n);}
for(const n in symb){console.log(symb[n]);}
for(const n in symb){console.log(`Key : ${n} and Value : ${symb[n]}`);}

