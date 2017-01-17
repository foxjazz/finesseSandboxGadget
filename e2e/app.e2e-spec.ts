import { ServiceUIPage } from './app.po';

describe('service-ui App', function() {
  let page: ServiceUIPage;

  beforeEach(() => {
    page = new ServiceUIPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
