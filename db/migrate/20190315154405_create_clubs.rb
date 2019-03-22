class CreateClubs < ActiveRecord::Migration[5.1]
  def change
    create_table :clubs do |t|
      t.string :name, null: false
      t.string :code
      t.string :logo

      t.timestamps
    end
  end
end
