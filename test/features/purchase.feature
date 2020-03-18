Feature: Performing a login

As a user on the login page
I want to login
Because I want to access my account

Background:

Given I am on the search page 

Scenario Outline: Adding addresses
When I input game title <game> into the text box and click the search button
When I confirm the game is present
When I click Add to Cart
Then I should receive a confirmation message

Examples:
|game|
|"Avengers"|