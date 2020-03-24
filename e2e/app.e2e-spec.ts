import { AngularsocialPage } from './app.po';

describe('angularsocial App', function() {
  let page: AngularsocialPage;

  beforeEach(() => {
    page = new AngularsocialPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
