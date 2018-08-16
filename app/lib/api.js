exports.config = {
	  debug: true,
		url : 'https://jsonplaceholder.typicode.com/',
		timeout : 10000,
		methods : [{
			name : 'getUsers',
			get : 'users'
		},{
			name : 'getAlbums',
			get : 'albums'
		},{
			name : 'getAlbum',
			get : 'photos?albumId=<albumId>'
		},{
			name : 'getTodos',
			get : 'todos?completed=<completed>'
		},{
			name : 'getPosts',
			get : 'posts'
		}],
		models : [{
			name : 'users',
			id : 'id',
			collections : [{
				name : 'users',
				content : '',
				read : 'getUsers'
			}]
		},{
			name : 'albums',
			id : 'id',
			collections : [{
				name : 'albums',
				content : '',
				read : 'getAlbums'
			}]
		},{
			name : 'album',
			id : 'id',
			collections : [{
				name : 'album',
				content : '',
				read : 'getAlbum'
			}]
		},{
			name : 'todos',
			id : 'id',
			collections : [{
				name : 'todos',
				content : '',
				read : 'getTodos'
			}]
		},{
			name : 'posts',
			id : 'id',
			collections : [{
				name : 'posts',
				content : '',
				read : 'getPosts'
			}]
		}]
};
