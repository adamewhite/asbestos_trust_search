class SitesController < ApplicationController

	# before_action :confirm_logged_in
	before_action :find_site, only: [:update, :destroy]

	def index

		# search filters

		@sites = Site.all
		@sites = @sites.keyword_search(params[:keyword]) if params[:keyword].present?
		@sites = @sites.name_search(params[:name]) if params[:name].present?
		@sites = @sites.city_search(params[:city]) if params[:city].present?
		@sites = @sites.state_search(params[:state]) if params[:state].present?
		@sites = @sites.country_search(params[:country]) if params[:country].present?

		# date objects

		dateToObj = Date.parse(params[:date_to]) if params[:date_to].present?
		dateFromObj = Date.parse(params[:date_from]) if params[:date_from].present?

		# date filters

		if dateToObj.nil? === false or dateFromObj.nil? === false
			@sites = @sites.date_search(dateFromObj, dateToObj)
		end

		#sort filters

		if params[:sortCriterion].present?
			if true?(params[:reverseOrder])
				@paginatedSites = @sites.order("#{params[:sortCriterion]} DESC, name ASC").page(params[:page]).per(5)
			else
				@paginatedSites = @sites.order("#{params[:sortCriterion]} ASC, name ASC").page(params[:page]).per(5)
			end
		else
			@paginatedSites = @sites.order('trust_id ASC, name ASC').page(params[:page]).per(5)
		end

		# complete datasets

		@allSites = @sites
		@allTrusts = Trust.all
	    
	end

	def create
		@site = Site.new(site_params)

		if @site.save
			render json: @site
		else
			render json: @site.errors, status: :unprocessable_entity
		end
	end

	def update
		if @site.update_attributes(site_params)
			render json: @site
		else
			render json: @site.errors, status: :unprocessable_entity
		end
	end

	def destroy
		@site.destroy
		render json: @site
	end

	private

	def find_site
		@site = Site.find(params[:id])
	end

	def site_params
		params.require(:site).permit(:name, :city, :state, :country, :start_date, :end_date, :trust_id, :trust, :site_code)
	end


	def true?(obj)
  		obj.to_s == "true"
	end
end
