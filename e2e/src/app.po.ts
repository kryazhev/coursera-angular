import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo(link: string) {
    return browser.get(link);
  }

  getElement(selector: string) {
    return element(by.css(selector));
  }

  getElementText(selector: string) {
    return this.getElement(selector).getText();
  }

  getAllElements(selector: string) {
    return element.all(by.css(selector));
  }
}
