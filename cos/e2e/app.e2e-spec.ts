import { CosPage } from './app.po';

describe('cos App', function() {
  let page: CosPage;

  beforeEach(() => {
    page = new CosPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
