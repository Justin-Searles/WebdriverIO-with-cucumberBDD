Feature: Performing a login

As a user on the login page
I want to login
Because I want to access my account

Background:

Given I am on the login page

Scenario Outline: Adding addresses
When I login with email and password <email1> <password> into the text box
Then I should see the logout link
When I click on the address link
When I click on the add address button 
When I add my personal information <firstName> <lastName> <email2> <company>
When I select my country information <country> <state>
When I add my address information <city> <addressLine1> <addressLine2> <zipCode> <phoneNumber>
When I click save
Then I should see my address info on the address page
When the delete button is present and is clicked and confirmed
Then I should not see my address info on the address page

Examples:
|firstName| |lastName| |email1| |email2| |password| |company| |country| |state| |city| |addressLine1| |addressLine2| |zipCode| |phoneNumber|
|"Herman"| |"Munster"| |"justin.searles@auticon.us"| |"justin.searles@auticon.us"| |"Auticon123!"| |"Auticon"| |"United States"| |"California"| |"Burbank"| |"1313 Mockingbird Lane"| |"Apt 13"| |"90039"| |"555-555-5555"|
