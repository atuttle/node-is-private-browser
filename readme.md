# Detect Private Browsing

A front-end module for detecting iOS private browsing sessions, so that you can modify your app's behavior and/or warn users as appropriate.

```js
var isPrivateBrowser = require('is-private-browser');
if (isPrivateBrowser()){
	alert('This app requires that you not use an iOS private browsing session');
}
```
