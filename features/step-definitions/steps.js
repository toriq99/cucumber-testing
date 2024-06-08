const { Given, When, Then } = require('@cucumber/cucumber');
const LoginPage = require('../pageobjects/login.page');
const DashboardPage = require('../pageobjects/dahsboard.page');
const OverviewTanah = require('../pageobjects/overview.tanah.page');
const StakeholderTanah = require('../pageobjects/stakehoder.tanah.page');

const pages = {
    login: LoginPage,
    dashboard: DashboardPage,
    tanah: OverviewTanah
}

Given(/^User is in a '([^"]*)' Page$/, async (page) => {
    switch (page) {
        case 'login':
            await pages['login'].open('auth/login')
            break;
    
        case 'dashboard':
            await pages['login'].open('projects')
            break;
    
        default:
            break;
    }
});

When(/^User login with '([^"]*)' and '([^"]*)'$/, async (username, password) => {
    await LoginPage.login(username, password)
});

When(/^User click card project on dashboard$/, async () => {
    await DashboardPage.tapCardProject();
});

When(/^User can see peta rincik that has been added before$/, async () => {
    await OverviewTanah.verifyPetaRincikSectionIsAvailable();
});

When(/^User can click '([^"]*)' tab$/, async (tab) => {
    switch (tab) {
        case 'stakeholder tanah':
            await OverviewTanah.tapTabStakeholderTanah();
            break;
    
        case 'daftar tanah':
            await OverviewTanah.tapTabStakeholderTanah();
            break;
    
        default:
            break;
    }
});

When(/^User click '([^"]*)' in stakeholder tanah$/, async (button) => {
    switch (button) {
        case 'tambah stakeholder':
            await StakeholderTanah.tapBtnTambahStakeholder();
            await browser.pause(2000);
            break;
    
        default:
            break;
    }
});

When(/^User click '([^"]*)' in Peta Rincik section$/, async (button) => {
    switch (button) {
        case 'tambah peta':
            await OverviewTanah.tapTambahPeta();
            break;
    
        default:
            break;
    }
});

When(/^User upload file '([^"]*)'$/, async (path) => {
    await OverviewTanah.uploadFile(path);
})

When(/^User fill nama stakeholder '([^"]*)'$/, async (name) => {
    await StakeholderTanah.fillName(name);
})

When(/^User fill nomor HP '([^"]*)'$/, async (noHP) => {
    await StakeholderTanah.fillNoHP(noHP);
})

When(/^User fill alamat '([^"]*)'$/, async (alamat) => {
    await StakeholderTanah.fillAddress(alamat);
})

When(/^User choose dokumen identitas '([^"]*)'$/, async (doc) => {
    await StakeholderTanah.tapDropdownIdentitas();
    await StakeholderTanah.chooseDocument(doc);
})

When(/^User upload file dokumen '([^"]*)'$/, async (doc) => {
    await StakeholderTanah.uploadFile(doc);
})

When(/^User tap button pilih$/, async () => {
    await OverviewTanah.tapBtnPilih();
})

When(/^User click simpan$/, async () => {
    await OverviewTanah.tapSimpan();
})

Then(/^User redirect to '([^"]*)' page$/, async (page) => {
    switch (page) {
        case 'dashboard':
            await pages['login'].open('projects')
            break;
        case 'tanah':
            await pages['tanah'].open('projects/8/lands/overview')
            break;
    
        default:
            break;
    }
});