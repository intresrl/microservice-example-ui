import { AngularI3wayClientPage } from './app.po';

describe('angular-i3way-client App', () => {
  let page: AngularI3wayClientPage;

  beforeEach(() => {
    page = new AngularI3wayClientPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
