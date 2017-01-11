import { SnookerPage } from './app.po';

describe('snooker App', function() {
  let page: SnookerPage;

  beforeEach(() => {
    page = new SnookerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
