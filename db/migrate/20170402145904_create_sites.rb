class CreateSites < ActiveRecord::Migration
  def change
    create_table :sites do |t|
      t.references :trust, foreign_key: true
      t.string :name
      t.string :city
      t.string :state
      t.string :country
      t.date :start_date
      t.date :end_date
      t.string :site_code

      t.timestamps null: false
    end
    add_index :sites, :trust_id 
  end
end
