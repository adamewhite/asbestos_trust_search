json.eligibleTrusts @eligibleTrusts do |site|
	json.id site.trust.id
	json.name site.trust.name
end

json.paginatedSites @paginatedSites do |site|
	json.(site, :id, :name, :city, :state, :country)
	json.start_date site.start_date.strftime("%-m/%-d/%Y")
	json.end_date site.end_date.strftime("%-m/%-d/%Y")
	json.trust_id site.trust_id
end

json.allTrusts @allTrusts do |trust|
	json.id trust.id
	json.name trust.name
end

json.meta do
  json.current_page @paginatedSites.current_page
  json.next_page @paginatedSites.next_page
  json.prev_page @paginatedSites.prev_page
  json.total_pages @paginatedSites.total_pages
  json.total_count @paginatedSites.total_count
end