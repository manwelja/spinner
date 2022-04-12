process.stdout.write('d2 node spinner1.js\n');
setTimeout(() => {
  process.stdout.write('\r|    ');
}, 100);
setTimeout(() => {
  process.stdout.write('\r/    ');
}, 300);
setTimeout(() => {
  process.stdout.write('\r-    ');
}, 500);
setTimeout(() => {
  process.stdout.write('\r\\    ');
}, 700);
setTimeout(() => {
  process.stdout.write('\r|    ');
}, 900);
setTimeout(() => {
  process.stdout.write('\r/    ');
}, 1200);
setTimeout(() => {
  process.stdout.write('\r-    ');
}, 1500);
setTimeout(() => {
  process.stdout.write('\r|    ');
}, 1800);
setTimeout(() => {
  process.stdout.write('\nd2');
}, 2100);