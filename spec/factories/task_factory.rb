FactoryGirl.define do
  factory :task do
    title { Faker::Company.catch_phrase }
    done  { [true, false].sample }
  end
end