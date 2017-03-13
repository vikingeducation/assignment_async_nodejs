readFileP(path, 'utf8').then (
	function(data) {...}, function(err) {}
);

writeFileP(path, message).then (
	function(message) {...}, function(err) {}
);

appendFile(path, message).then (
	function(message) {...}, function(err) {}
);
