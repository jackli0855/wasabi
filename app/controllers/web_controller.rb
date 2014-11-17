class WebController < ApplicationController

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
			redirect :action => "order_over"
		end
	end

	def order_over
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
