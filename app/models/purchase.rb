class Purchase < ActiveRecord::Base
	validates_confirmation_of :email

	validates :name,:email,:tel, presence: true
	validates :email, confirmation: true
  validates :email_confirmation, presence: true

end
