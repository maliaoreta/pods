import { PodsPage } from './app.po';

describe('pods App', function() {
  let page: PodsPage;

  beforeEach(() => {
    page = new PodsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
