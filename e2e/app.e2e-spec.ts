import { TestpwcPage } from './app.po';

describe('testpwc App', () => {
  let page: TestpwcPage;

  beforeEach(() => {
    page = new TestpwcPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
