const { readFileSync, writeFileSync } = require('fs')

const first = readFileSync('./content/text.txt', 'utf8')

writeFileSync(
    './content/nodeAddFile.txt', 
    `My favorite sentence is '${first}', I hope you like it too`
)

writeFileSync(
    './content/nodeAddFile2.txt',
    'Who knows where the Muffin-man is?'
)

writeFileSync(
    './content/nodeAddFile2.txt',
    '  He is here!  Under the floor board!',
    {flag: 'a'}
)