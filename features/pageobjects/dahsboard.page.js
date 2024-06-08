const { $ } = require('@wdio/globals')
const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class DashboardPage extends Page {
    /**
     * define selectors using getter methods
     */
    get cardProject () { return $(".css-1h79skh")};

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async verifyDashboard() {
        // get dashboard element and verify here
    }
    async tapCardProject() {
        await this.cardProject.waitForDisplayed();
        await this.cardProject.click();
    }
}

module.exports = new DashboardPage();
