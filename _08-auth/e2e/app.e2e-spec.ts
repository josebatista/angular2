import { 08AuthPage } from './app.po';

describe('-08-auth App', function() {
  let page: 08AuthPage;

  beforeEach(() => {
    page = new 08AuthPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
