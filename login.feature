Feature: Login to Application


    As a Valid user
    I want to login into application

    Scenario: Valid User
        Given I open login page
        When I submit button login
        Then I should see homepage
        
