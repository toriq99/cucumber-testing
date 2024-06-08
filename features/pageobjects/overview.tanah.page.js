const { $ } = require('@wdio/globals')
const Page = require('./page');
const path = require('path');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class OverviewTanah extends Page {
    /**
     * define selectors using getter methods
     */
    get titleTanah () { return $('.MuiTypography-h4')};
    get sectionPetaRincik () { return $('.css-124qer8')};
    get btnTambahPeta () { return $('.css-v4gl0l')};
    get btnPilihFile () { return $('.css-l64zdd')};
    // get btnPilihFile () { return $('//*[text()="Pilih"]')};
    get formUploadFile() { return $("[placeholder='Tidak Ada File Dipilih']")};
    get btnSimpan() { return $('//*[text()="Simpan"]')};

    get tabStakeholderTanah() { return $('//*[text()="Stakeholder Tanah"]')};

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async verifyOverviewTanahPage() {
        await expect(await this.titleTanah).toBeDisplayed();
    }
    async verifyPetaRincikSectionIsAvailable() {
        await expect(await this.sectionPetaRincik).toBeDisplayed();
        await expect(await this.btnTambahPeta).toBeDisplayed();
    }
    async tapTambahPeta() {
        await (await this.btnTambahPeta).click();
    }
    async tapBtnPilih() {
        await (await this.btnPilihFile).click();
    }
    async uploadFile(directory) {
        await (await this.btnPilihFile).waitForDisplayed();
        await (await this.btnPilihFile).waitForEnabled();
        await (await this.formUploadFile).waitForEnabled();

        const filePath = path.join(__dirname, '../../src/', directory);
        const remoteFileUpload = await browser.uploadFile(filePath);
        
        await (await this.formUploadFile).addValue(remoteFileUpload);
    }
    async tapSimpan() {
        await (await this.btnSimpan).waitForEnabled();
        await (await this.btnSimpan).click();
    }
    async tapTabStakeholderTanah() {
        await (await this.tabStakeholderTanah).click();
    }
}

module.exports = new OverviewTanah();
