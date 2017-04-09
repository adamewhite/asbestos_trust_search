class Site < ActiveRecord::Base

	before_create :set_dates
	belongs_to :trust

	scope :keyword_search, lambda {|query| where(["name ILIKE :query OR city ILIKE :query OR state ILIKE :query OR country ILIKE :query", query: "%#{query}%"])}
	scope :name_search, lambda {|name| where(["name ILIKE ?", "%#{name}%"]) if name.present?}
	scope :city_search, lambda {|city| where(["city ILIKE ?", "%#{city}%"]) if city.present?}
	scope :state_search, lambda {|state| where(["state ILIKE ?", "%#{state}%"]) if state.present?}
	scope :country_search, lambda {|country| where(["country ILIKE ?", "%#{country}%"]) if country.present?}
	scope :date_search, lambda {|date_from, date_to| where.not(["? > end_date OR ? < start_date", date_from, date_to])}

  def set_dates
  	self.start_date ||= '1900-01-01'
    self.end_date ||= '2015-01-01'
  end
end
