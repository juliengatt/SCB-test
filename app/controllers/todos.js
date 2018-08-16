function move(e) {
	$.header.children.forEach(function(element) {
		element.color = "#000";
	});
	e.source.color = "#5aacff";
	separatorMove(e.source.tab);
}

function separatorMove(position) {
	$.separator.animate({
		left : position * 50 + "%",
		duration : 500
	});
	//$.main.scrollToView(position);
	refresh(position);
}

function refresh(position) {
	$.table.setData([]);
	Alloy.Collections.todos.fetch({
		completed : position ? true : false
	});
}

refresh();
