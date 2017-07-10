import { Angular4BeginnersPage } from './app.po';

describe('angular4-beginners App', () => {
  let page: Angular4BeginnersPage;

  beforeEach(() => {
    page = new Angular4BeginnersPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
