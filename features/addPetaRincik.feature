Feature: Tambah Peta Rincik

Background: Create peta rincik
Given User is in a 'login' Page

@id:1
Scenario: As a user, I can add peta rincik if there's already previous file
When User login with 'automation5@gmail.com' and 'automation5@gmail.com'
And User click card project on dashboard
And User redirect to 'tanah' page
And User can see peta rincik that has been added before
And User click 'tambah peta' in Peta Rincik section
And User upload file '314849.jpg'
# And User click simpan
# Then User can see latest Peta Rincik