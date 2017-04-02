require 'csv'
namespace :import_site_csv do
  task :create_sites => :environment do
    CSV.foreach('../seed_site_data.csv', :headers => true) do |row|
    	row['trust_id'] = row['trust_id'].to_i
  		Site.create!(row.to_hash)
	end
  end
end 