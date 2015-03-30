class ContactMailer < ActionMailer::Base
  default from: "no-reply@wasabiyangon.com",
          bcc: ["hervester9@gmail.com", "lb.funward@gmail.com"]

  # def order_email(purchase)
  #   @purchase = purchase
  #   @url  = 'http://wasabiyangon.com/'
  #   mail(to: @purchase.email, subject: 'Order Mail')
  # end
  def welcome_email(contact)
    @contact = contact
    @url  = 'http://wasabiyangon.com'
    mail(to: @contact.email, subject: 'Welcome to My Awesome Site')
  end
end
