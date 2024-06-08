const { $ } = require('@wdio/globals')
const Page = require('./page');
const path = require('path');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class StakeholderTanah extends Page {
    /**
     * define selectors using getter methods
     */
    get btnTambahStakeHolder() { return $('.MuiButton-contained')};

    get fieldNama() { return $('[name=name]')};
    get fieldNoHP() { return $('[name=phoneNumber]')};
    get fieldAddress() { return $('[name=address]')};
    get dropdownDokumen() { return $('.css-13sljp9')};
    get chooseKK() { return $('//*[text()="KK"]')};
    get chooseKTP() { return $('//*[text()="KTP"]')};
    get choosePaspor() { return $('//*[text()="Paspor"]')};
    get chooseSIM() { return $('//*[text()="SIM"]')};
    // get uploadFile() { return $("//div[@class='MuiStack-root css-ai3tbd']//div[@class='MuiFormControl-root MuiFormControl-fullWidth MuiTextField-root css-7c6ptb']//fieldset[@class='MuiOutlinedInput-notchedOutline css-igs3ac']")};
    get uploadDoc() { return $("//div[@class='MuiStack-root css-ai3tbd']//input[@class='MuiInputBase-input MuiOutlinedInput-input MuiInputBase-inputAdornedStart Mui-readOnly MuiInputBase-readOnly css-xhud73']")};
    get uploadFotoProfil() { return $('//input[@name="profilePictureUrl"]')};

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async tapBtnTambahStakeholder() {
        await (await this.btnTambahStakeHolder).click();
    }
    async fillName(name) {
        await (await this.fieldNama).setValue(name);
    }
    async fillNoHP(noHP) {
        await (await this.fieldNoHP).setValue(noHP);
    }
    async fillAddress(address) {
        await (await this.fieldAddress).setValue(address);
    }
    async tapDropdownIdentitas() {
        await (await this.dropdownDokumen).click();
    }
    async chooseDocument(doc) {
        switch (doc) {
            case 'KTP':
                await (await this.chooseKTP).click();
                break;
        
            default:
                break;
        }
    }
    async uploadFile(directory) {
        await (await this.uploadDoc).waitForDisplayed();
        await (await this.uploadDoc).waitForEnabled();

        const filePath = path.join(__dirname, '../../src/', directory);
        const remoteFileUpload = await browser.uploadFile(filePath);
        
        await (await this.uploadDoc).addValue(remoteFileUpload);
        await browser.pause(5000);
    }
}

module.exports = new StakeholderTanah();
