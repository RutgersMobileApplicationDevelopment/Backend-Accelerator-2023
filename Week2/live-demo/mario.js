let height = 8;

for (let i = 0; i <= height; i++) {
    let line = "";
    for (let j = 0; j < height-i; j++) {
        line += " "
    }
    for (let j = 0; j < i; j++) {
        line += "#"
    }
    console.log(line)
}