Alloy.Collections.posts.fetch();

function post(e) {
	const model = Alloy.Collections.posts.at(e.index);
	model.transform();
	Alloy.Globals.openPage.post(model);
}
