process.stdout.write('Welcome to Holberton School, what is your name?\n');

// listens for input from the user using the process.stdin.on() method
process.stdin.on('data', (data) => {
  const name = data.toString().trim();
  if (name) {
    process.stdout.write(`Your name is: ${name}\n`);
    process.exit();
  } else {
    process.stdout.write('Please enter your name: \n');
  }
});

// program listens for the exit event using the process.on()
process.on('exit', () => {
  process.stdout.write('This important software is now closing\n');
});
