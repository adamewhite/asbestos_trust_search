class CreateBurgers < ActiveRecord::Migration
  def change
    create_table :burgers do |t|

      t.timestamps null: false
    end
  end
end
