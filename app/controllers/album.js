const model = $.args.json.toJSON();

Alloy.Collections.album.fetch({
	albumId : model.id
});

function photo(e) {
	Alloy.Globals.openPage.photo(e.row.json);
}
