self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);
function makeFile(name, contentype, content){
  eval(`
  if (url.pathname === '` + name + `') {
    event.respondWith(
      fetch('https://example.com')
        .then(response => {
            return new Response(atob('` + content + `'), {
              status: 200,
              headers: { 'Content-Type': '` + contenttype + `' }
            });
        })
    );
  }
  `);
}
  makeFile("/makeFile/test.html", "text/html", "PGh0bWw+CjxoZWFkPgo8L2hlYWQ+Cjxib2R5Pgo8aDE+WUVFRTwvaDE+CjwvYm9keT4KPC9odG1sPg==");
});
