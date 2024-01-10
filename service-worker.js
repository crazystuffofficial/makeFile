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
});
