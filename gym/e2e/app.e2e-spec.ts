import { GymPage } from './app.po';

describe('gym App', function() {
  let page: GymPage;

  beforeEach(() => {
    page = new GymPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
