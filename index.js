module.exports = function isIOSPrivateBrowser(){
	if (typeof localStorage === 'undefined') return false;

	try {
		localStorage.setItem('private-browser-detection', 1);
		return (localStorage.getItem('private-browser-detection') != 1);
	}catch(e){
		return true;
	}
};
