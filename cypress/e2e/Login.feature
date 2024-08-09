Feature: Swab Labs - Login page


  Scenario Outline: Validate valid login credentials
    Given I navigate to the Swab Labs login page
    And I type a valid username <username>
    And I type a valid password <password>
    And I click on login button
    Then I should be redirected to the products page

    Examples:
      | username      | password     |
      | standard_user | secret_sauce |