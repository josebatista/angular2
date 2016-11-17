import { 05FormsPage } from './app.po';

describe('-05-forms App', function() {
  let page: 05FormsPage;

  beforeEach(() => {
    page = new 05FormsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
