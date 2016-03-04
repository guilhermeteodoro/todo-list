class Task < ActiveRecord::Base
  attr_accessible :done, :title

  scope :done, -> { where(done: true) }
  scope :done_first, -> { order('done desc, updated_at desc') }

  validates :title, presence: true, allow_blank: false, length: { in: 5..100 }
  validates :done, inclusion: { in: [true, false] }
end