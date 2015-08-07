class ContactController < ApplicationController

  def new
  	@contact = Contact.new
  end

  def create
  	# begin
  		@contact = Contact.new(contact_params)
  		#@contact.request = request
  		if @contact.save
  			flash.now[:notice] = "Thank you for your message!"
  		else
  			render 'new'
  		end
  	# rescue ScriptError
  	# 	flash[:error] = "Sorry, this message appears to be spam and was not delivered."
  	# end
  end

  private

    def contact_params
    params.require(:contact).permit(:name, :nickname, :email, :subject, :body)
    end

end
