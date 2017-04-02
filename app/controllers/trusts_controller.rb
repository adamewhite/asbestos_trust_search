class TrustsController < ApplicationController

	before_action :confirm_logged_in

	def index
		@trusts = Trust.all

		respond_to do |format|
	        format.html
	        format.json { render json: @trusts }
	    end
	end

	private

		def trust_params
			params.require(:trust).permit(:name, :location)
		end
end
