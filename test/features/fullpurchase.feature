Feature: Performing a login

As a user on the login page
I want to login
Because I want to access my account

Background:

Given I am on the login page

Scenario Outline: Adding addresses
When I login with email and password <email> <password> into the text box
Then I should see the logout link
When I input game title <game> into the search box and click the search button
When I confirm the game is present
When I click Add to Cart
Then I should receive a confirmation message
When I close the confirmation message
When I click on the shopping cart
When I start the purchase flow
When I select my purchase address
When I select my shipping method
When I select my purchase method
When I input my card info <card type> <card name> <card number> <card month> <card year> <ccv> and click confirmation
When I confirm my purchase
Then I should receive a confirmation message for my purchase

Examples:
|email| |password| |game| |card type| |card name| |card number| |card month| |card year| |ccv| 
|"justin.searles@auticon.us"| |"Auticon123!"| |"Avengers"| |"Visa"| |"Justin Searles"| |"4539723605159903"| |"09"| |"2023"| |"612"| 
