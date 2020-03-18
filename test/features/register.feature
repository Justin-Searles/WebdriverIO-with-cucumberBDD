Feature: Performing a registration

As a user on the register page
I want to register
Because I want to create an account



Background:

Given I am on the register page

Scenario Outline: Performing registration operation with passing test data as data table
When I select the gender radio button with male
When I select <birthDay> <birthMonth> <birthYear> into the dropdown menus
When I register with first name and last name and company and email and password <firstName> <lastName> <email> <company> <password> into the text box
Then I should see the registration confirmed message 

Examples:
|firstName| |lastName| |birthDay| |birthMonth| |birthYear| |email| |company| |password|
|"Justin"| |"Searles"| |"6"| |"September"| |"1986"| |"justin.searles.2@auticon.us"| |"Auticon"| |"Auticon123!"|