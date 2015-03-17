describe('test', function () {

    it('should', function () {

        browser.get('http://localhost:63342/protractor-demo/index.html');

        element(by.model('newItem')).sendKeys('abc');
        element(by.css('.button')).click();

        var items = element.all(by.repeater('item in items'));
        expect(items.count()).toEqual(4);
        expect(items.get(3).getText()).toEqual('abc');

    });

    it('should load repos', function () {

        browser.get('http://localhost:63342/protractor-demo/index.html');

        element(by.css('.btn-load-repos')).click();

        var items = element.all(by.repeater('repo in repos'));

        expect(items.count()).toEqual(100);

        expect(items.get(2).getText()).toEqual('rubinius/rubinius');

    });

});