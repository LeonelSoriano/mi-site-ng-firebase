import { MiSiteNgFirebasePage } from './app.po';

describe('mi-site-ng-firebase App', () => {
  let page: MiSiteNgFirebasePage;

  beforeEach(() => {
    page = new MiSiteNgFirebasePage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
