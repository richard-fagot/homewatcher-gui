import { HomewatcherGuiPage } from './app.po';

describe('homewatcher-gui App', function() {
  let page: HomewatcherGuiPage;

  beforeEach(() => {
    page = new HomewatcherGuiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
