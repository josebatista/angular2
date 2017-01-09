import { 07HttpPage } from './app.po';

describe('-07-http App', function() {
  let page: 07HttpPage;

  beforeEach(() => {
    page = new 07HttpPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
