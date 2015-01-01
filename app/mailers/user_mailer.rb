#encoding: utf-8
class UserMailer < ActionMailer::Base
  default from: "no-reply@wasabiyangon.com"

  def order_email(purchase)
  	@purchase = purchase
    @url  = 'http://example.com/login'
    mail(to: @purchase.email, subject: 'Welcome to My Awesome Site')
  end

end
