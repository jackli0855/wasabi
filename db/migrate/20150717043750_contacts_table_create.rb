class ContactsTableCreate < ActiveRecord::Migration
  def change
   create_table :contacts do |t|
    	t.string :name
    	t.string :nickname
    	t.string :email
    	t.string :subject
    	t.string :body
      t.timestamps
    end
  end
end
