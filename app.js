module.exports = {
    _id: 'test',
    publics : [{
		path : '/spec',
		subDir : '/spec'
	},{
		path : '/js',
		subDir : '/js'
	}],    
    routes: [
        '/time => test.getTime',
        
        {
            path: '/counter',
            handler: 'test.getCount'
        },
        
        { 
            path: '/html-test',
            handler: 'test.genHTML'
        }
    ]
};