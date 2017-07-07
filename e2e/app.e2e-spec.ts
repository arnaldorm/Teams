import { FusionTeamsPage } from './app.po';

describe('fusion-teams App', () => {
  let page: FusionTeamsPage;

  beforeEach(() => {
    page = new FusionTeamsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
