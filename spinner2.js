process.stdout.write('d2 node spinner1.js\n');
const spinnerArray = ['\r|    ', '\r/    ', '\r-    ', '\r|    ', '\r-    ', '\r|    '];
let timer = 100;

spinnerArray.forEach((element) => {
  setTimeout(() => {
    process.stdout.write(element);
  }, timer);
  timer += 200;
});

setTimeout(() => {
  process.stdout.write('\nd2');
}, (spinnerArray.length * 200) + 100);