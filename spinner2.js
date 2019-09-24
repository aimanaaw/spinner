const spinner = function() {
  const arr = ['|', '/', '-', '\\', '|', '/', '-', '\\', '|'];
  for (let i = 0; i < arr.length; i++) {
    setTimeout(() => { process.stdout.write(`\r${arr[i]}   `); }, (i * 100) + 100);
  }};
spinner();  