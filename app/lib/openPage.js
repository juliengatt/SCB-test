function openController(source, args) {
	return Alloy.createController(source, args).getView();
}

function openWindow(win, args) {
	if (Alloy.Globals.tabgroup.apiName === 'Ti.UI.TabGroup') {
		Alloy.Globals.tabgroup.getActiveTab().open(openController(win, args));
	} else if (Alloy.Globals.tabgroup.apiName === 'Ti.UI.iOS.NavigationWindow') {
		Alloy.Globals.tabgroup.openWindow(openController(win, args));
	}
}

exports.user = function(model) {
	openWindow('user', {
		$model : model,
		json : model
	});
};

exports.album = function(model) {
	openWindow('album', {
		$model : model,
		json : model
	});
};

exports.photo = function(model) {
	openWindow('photo', {
		json : model
	});
};

exports.post = function(model) {
	openWindow('post', {
		$model : model,
		json : model
	});
};
