/* eslint-disable */
// create a program and should displaythe following message. 

console.log('Welcome to Holberton School, what is your name?');
process.stdin.on('readable', () => {
    const name = process.stdin.read();
    if (name !== null) process.stdout.write(`Your name is: ${name}`);
    }
);
process.stdin.on('end', () => {
    process.stdout.write('This important software is now closing\n');
}
);
