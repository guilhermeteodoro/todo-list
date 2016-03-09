class Task < ActiveRecord::Base
  scope :done, -> { where(done: true) }
  scope :done_last, -> { order('done asc, updated_at asc') }

  validates :title, presence: true, allow_blank: false, length: { in: 2...100 }
  validates :done, inclusion: { in: [true, false] }
end