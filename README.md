# Listing
## What it (sort of) does

* Responds with 200 OK and a file if it’s requested (if /about.html is requested the server should respond with the contents of that file so the browser can render it)
* Responds with a correct Content-Type header (if /images/avatar.png is requested the server should respond Content-Type: image/png so the browser can show it)
 * Respond with 404 Not Found and a ~~useful~~ HTML page saying that the file could not be found (if /nonexistent-file.html is requested the server should send a nice document that the browser can display)
* Respond with 200 OK and an index.html file if it exists (if /assets is requested and /assets/index.html exists, the server should respond with the contents of that file as if /assets/index.html was requested instead)

## What it (perhaps) should but doesn't do

* Working CSS
* The last bullet of the assignment (list of entries in /images)
