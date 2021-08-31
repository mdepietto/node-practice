const { readFile, writeFile } = require('fs')

console.log('start');
readFile('./content/nodeAddFile.txt', 'utf8', (err, result) => {
    if (err) {
        console.log(err);
        return;
    }
    const first = result;
    readFile('./content/nodeAddFile2.txt', 'utf8', (err, result) => {
        if (err) {
            console.log(err);
            return;
        }
        const second = result
        writeFile('./content/nodeAddFile3.txt',
            `Both of these files combined say: ${first} and ${second}.`,
            (err, result) => {
                if (err) {
                    console.log(err);
                    return
                }
                console.log('done with task');
        })
    })
})
console.log('beginning next task');

// this and test5 are similar things, but test5 seems simpler
// sync does things in order, async returns what finishes first