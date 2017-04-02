json.extract! site, :id, :trust_id, :name, :city, :state, :country, :start_date, :end_date, :site_code, :created_at, :updated_at
json.url site_url(site, format: :json)
