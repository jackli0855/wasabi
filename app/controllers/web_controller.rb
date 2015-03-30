#encoding: utf-8
class WebController < ApplicationController

	before_filter :set_locale
	def set_locale
		I18n.locale = params[:locale] || I18n.default_locale ;
	end
	
	def send_order
		@purchase = Purchase.new
		img_src = params[:selected_img]
		if img_src.present?
			img_src = img_src.split("/").last
		end
		
		@purchase.selected_img = img_src
		render :action => "order"
	end

	def order
		@purchase = Purchase.new(purchase_params)
		if @purchase.save
			UserMailer.order_email(@purchase).deliver
			flash[:notice] = "order successfully, and check your ordered email"
			redirect_to :action => "order_over"
		else
			flash[:notice] = "order field"
		end
	end

	def order_over
	end

	def curry
	end

	def drink
	end

	def guide
	end

	def steak
	end

	def sushi
	end

	def about
	end

	def contact
	end

	def yakimono
	end

	def delivery
	end

	def index
	end

	private
    # Using a private method to encapsulate the permissible parameters
    # is just a good pattern since you'll be able to reuse the same
    # permit list between create and update. Also, you can specialize
    # this method with per-user checking of permissible attributes.
    def purchase_params
    	logger.info "333333333333333333333333333333333"
      params.require(:purchase).permit(:name, :email, :email_confirmation, :tel, :memo, :selected_img)
    end
end
