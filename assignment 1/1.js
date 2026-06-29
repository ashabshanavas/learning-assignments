const text = "hello";
var reversed = ""
for (i=1;i<(text.length+1);i++) {
    reversed = reversed + text[(text.length)-i]
}
console.log(reversed)