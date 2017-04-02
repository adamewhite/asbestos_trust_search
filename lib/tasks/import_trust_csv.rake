require 'csv'
namespace :import_trust_csv do
  task :create_trusts => :environment do
    CSV.foreach('../seed_trust_data.csv', :headers => true) do |row|
  		Trust.create!(row.to_hash)
	end
  end
end 