class Contact < ActiveRecord::Base
	validates :name,:email,:subject,:body, presence: true
  	validates_format_of :email, :with => /\A([\w\.%\+\-]+)@([\w\-]+\.)+([\w]{2,})\z/i
end
