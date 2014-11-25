class CreatePurchases < ActiveRecord::Migration
  def change
    create_table :purchases do |t|
    	t.string :name
    	t.string :email
    	t.string :tel
    	t.string :selected_img
    	t.string :memo  
      t.timestamps
    end
  end
end
