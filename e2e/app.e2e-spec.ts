import { CustomLibraryPage } from './app.po';

describe('custom-library App', () => {
  let page: CustomLibraryPage;

  beforeEach(() => {
    page = new CustomLibraryPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
