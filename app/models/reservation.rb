class Reservation < ApplicationRecord
	validates :time, :date, :size, presence: true
  belongs_to :user
	belongs_to :neighbourhood
end
