# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)


require 'csv'

trust_csv_read = File.read(Rails.root.join('lib', 'seeds', 'seed_trust_data.csv'))
trust_csv = CSV.parse(trust_csv_read, :headers => true, :encoding => 'ISO-8859-1')
trust_csv.each do |row|
	Trust.create!(row.to_hash)
end

site_csv_read = File.read(Rails.root.join('lib', 'seeds', 'seed_site_data.csv'))
site_csv = CSV.parse(site_csv_read, :headers => true, :encoding => 'ISO-8859-1')
site_csv.each do |row|
	Site.create!(row.to_hash)
end
