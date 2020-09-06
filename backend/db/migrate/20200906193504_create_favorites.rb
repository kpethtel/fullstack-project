class CreateFavorites < ActiveRecord::Migration[6.0]
  def change
    create_table :favorites do |t|
      t.string :format
      t.string :source
      t.string :url
      t.string :search_term

      t.timestamps
    end
  end
end
