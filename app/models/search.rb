class Search < ActiveRecord::Base

	def search_sites
		sites = Site.all

		sites = sites.where(["name LIKE ?", "%#{name}%"]) if name.present?
		sites = sites.where(["city LIKE ?", "%#{city}%"]) if city.present?
		sites = sites.where(["state LIKE ?", "%#{state}%"]) if state.present?
		sites = sites.where(["country LIKE ?", "%#{country}%"]) if country.present?
		sites = sites.where(["start_date >= ?", "%#{start_date}%"]) if start_date.present?
		sites = sites.where(["end_date >= ?", "%#{end_date}%"]) if end_date.present?

		return sites
	end
	
end
