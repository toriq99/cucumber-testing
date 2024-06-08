Feature: Tambah Stakeholder

Background: Create Stakeholder
Given User is in a 'login' Page
And User login with 'automation5@gmail.com' and 'automation5@gmail.com'

@id:1
Scenario: As a user, I can't add stakeholder and fill name with symbol
When User click card project on dashboard
And User redirect to 'tanah' page
And User can click 'stakeholder tanah' tab
And User click 'tambah stakeholder' in stakeholder tanah
And User fill nama stakeholder '@&^%%(*!&(*&@%'
And User fill nomor HP '8111 222 333'
And User fill alamat 'Jl. Aja Dulu'
And User choose dokumen identitas 'KTP'
And User upload file dokumen '314849.jpg'
# Then Simpan button disable
# And User choose dokumen identitas ''
# And User upload dokumen identitas ''

@id:2
Scenario: As a user, I can add stakeholder and fill mandatory form 
When User click card project on dashboard
And User redirect to 'tanah' page
And User can click 'stakeholder tanah' tab
And User click 'tambah stakeholder' in stakeholder tanah
# And User fill nama stakeholder ''
# And User fill nomor HP ''
# And User fill alamat ''
# And User choose dokumen identitas ''
# And User upload dokumen identitas ''
# And User click button ''
# Then User can see latest stakeholder
