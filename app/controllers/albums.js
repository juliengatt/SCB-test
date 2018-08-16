Alloy.Collections.albums.fetch();

function album(e) {
	const model = Alloy.Collections.albums.at(e.index);
	model.transform();
	Alloy.Globals.openPage.album(model);
}