@Google

Feature: Google search
    As a user
    I need to search IE's website in google
    So that I could know more about IE

    Background:
        Given I am browsing the google.com URL

    @smokeTest
    Scenario: At google home page - need to search for the keyword IE
        When I enter the keyword IE DIGITAL in the search textbox and click search button
        Then I will see the i.e. as the first link
