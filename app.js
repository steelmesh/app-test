module.exports = {
    _id: 'test',
    
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