require 'factory_girl'
require 'faker'

Dir[Rails.root.join('spec/factories/**/*.rb')].each { |f| require f }

10.times { p FactoryGirl.create(:task) }