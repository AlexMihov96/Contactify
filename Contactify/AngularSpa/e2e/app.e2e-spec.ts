import { AngularSpaPage } from './app.po';

describe('angular-spa App', function() {
  let page: AngularSpaPage;

  beforeEach(() => {
    page = new AngularSpaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
