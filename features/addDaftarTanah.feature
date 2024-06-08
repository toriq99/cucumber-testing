Feature: Tambah Daftar Tanah

Background: Add Daftar Tanah
Given User is in a 'login' Page
And User login with 'automation5@gmail.com' and 'automation5@gmail.com'

@id:1
Scenario: As a user, I can see list daftar tanah
When User click card project on dashboard
And User redirect to 'tanah' page
And User can click 'daftar tanah' tab
# Then User see list daftar tanah

@id:2
Scenario: As a user, I can add new 'daftar tanah'
When User click card project on dashboard
And User redirect to 'tanah' page
And User can click 'daftar tanah' tab
# And User click 'tambah tanah' on daftar tanah tab
# And User choose nama pemilik tanah ''
# And User fill nomor object pajak ''
# And User fill harga transaksi ''
# And User choose versi peta rincik ''
# And User fill plot number ''
# And User choose tahap ''
# And User fill luas tanah''
# And User click 'tambah'
# Then User see list daftar tanah

@id:3
Scenario: As a user, I can add new 'daftar tanah'
When User click card project on dashboard
And User redirect to 'tanah' page
And User can click 'daftar tanah' tab
# And User click icon aksi in selected data
# And User click 'detail'
# Then User redirect to 'land detail' page
