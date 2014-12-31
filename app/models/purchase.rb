#encoding: utf-8
class Purchase < ActiveRecord::Base
	validates_confirmation_of :email

	validates :name,:email,:tel, presence: true
	validates :email, confirmation: true
  validates :email_confirmation, presence: true

  validates_format_of :email, :with => /\A([\w\.%\+\-]+)@([\w\-]+\.)+([\w]{2,})\z/i
end
