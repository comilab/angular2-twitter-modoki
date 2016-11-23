import { Angular2TwitterModokiPage } from './app.po';

describe('angular2-twitter-modoki App', function() {
  let page: Angular2TwitterModokiPage;

  beforeEach(() => {
    page = new Angular2TwitterModokiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
