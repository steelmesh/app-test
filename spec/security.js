describe('security', function() {
    it('should reject attempts to put documents', function() {
        var xhr = $.ajax({
                url: 'test.txt',
                type: 'PUT',
                data: 'This is a text',
                headers: {
                    'Content-Type': 'text/plain'
                }
            });
            
        waitsFor(function() {
            return xhr.status;
        });
        
        runs(function() {
            expect(xhr.status).toEqual(405);
        });
    });
    
    it('should be able to get the test document', function() {
        var xhr = $.ajax({ url: 'test.txt' });
        
        waitsFor(function() { return xhr.status; });
        runs(function() {
            expect(xhr.responseText).toEqual('The original test document.');
        });
    });
});