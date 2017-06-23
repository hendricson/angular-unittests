import { UnittestPage } from './app.po';

describe('unittest App', () => {
  let page: UnittestPage;

  beforeEach(() => {
    page = new UnittestPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
