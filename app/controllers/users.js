Alloy.Collections.users.fetch();

function transform(model) {
	const transform = model.toJSON();
	transform.fulladdress = transform.address.street + " " + transform.address.city + " " + transform.address.zipcode;
	return transform;
}

function user(e) {
	if (e.source.id === 'address') {
		alert(e.source.fulladdress);
	} else {
		const model = Alloy.Collections.users.at(e.index);
		model.transform();
		Alloy.Globals.openPage.user(model);
	}
}
