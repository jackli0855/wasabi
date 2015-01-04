#encoding: utf-8
class UserMailer < ActionMailer::Base
  default from: "no-reply@wasabiyangon.com",
  				bcc: ["hervester9@gmail.com", "lb.funward@gmail.com"]

  def order_email(purchase)
  	@purchase = purchase
    @url  = 'http://wasabiyangon.com/'
    mail(to: @purchase.email, subject: 'Order Mail')
  end

end
