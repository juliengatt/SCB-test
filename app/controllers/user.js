const model = $.args.json.toJSON();

$.company.modifyText(model.company.name);
$.fulladdress.modifyText(model.address.street + " " + model.address.city + " " + model.address.zipcode);

