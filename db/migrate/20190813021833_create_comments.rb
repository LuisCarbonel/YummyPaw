class CreateComments < ActiveRecord::Migration[5.2]
  def change
    create_table :comments do |t|
      t.string :post
      t.references :pet, foreign_key: true

      t.timestamps
    end
  end
end
