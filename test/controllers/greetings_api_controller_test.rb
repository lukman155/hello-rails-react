require 'test_helper'

class GreetingsApiControllerTest < ActionDispatch::IntegrationTest
  test 'should get random' do
    get greetings_api_random_url
    assert_response :success
  end
end
