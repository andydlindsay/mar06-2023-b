class CreateQueens < ActiveRecord::Migration[6.1]
  def change
    create_table :queens do |t|
      t.string :name

      t.timestamps
    end
  end
end
