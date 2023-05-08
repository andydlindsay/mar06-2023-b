class CreateQuotes < ActiveRecord::Migration[6.1]
  def change
    create_table :quotes do |t|
      t.string :quote
    
      t.references :queen, foreign_key: true, index: true # queen_id

      t.timestamps
    end
  end
end
