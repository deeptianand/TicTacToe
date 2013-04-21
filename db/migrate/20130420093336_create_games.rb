class CreateGames < ActiveRecord::Migration
  def change
  	create_table :games do |t|
  		t.timestamps
  		t.string :status
  	end
  end
end
