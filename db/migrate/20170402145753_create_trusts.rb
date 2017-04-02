class CreateTrusts < ActiveRecord::Migration
  def change
    create_table :trusts do |t|
    	t.string :name
     	t.string :location

      t.timestamps null: false
    end
  end
end
