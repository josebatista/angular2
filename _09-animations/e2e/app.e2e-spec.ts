import { 09AnimationsPage } from './app.po';

describe('-09-animations App', function() {
  let page: 09AnimationsPage;

  beforeEach(() => {
    page = new 09AnimationsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
