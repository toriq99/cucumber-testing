Feature: Login Dashboard

Background: Possitive login
Given User is in a 'login' Page

@id:1
Scenario: As a user, I can log into dashboard
When User login with 'automation5@gmail.com' and 'automation5@gmail.com'
Then User redirect to 'dashboard' page