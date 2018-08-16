$.row.json = {
	text : $.args.text,
	image : $.args.image,
};

$.name.text = $.args.text;
$.image.image = $.args.image;

if ($.args.fulladdress) {
	$.address.fulladdress = $.args.fulladdress;
} else {
	$.row.remove($.address);
}

if (!$.args.image) {
	$.row.hasChild = false;
	$.name.left = 20;
}
