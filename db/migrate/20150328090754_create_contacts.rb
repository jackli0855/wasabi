class CreateContacts < ActiveRecord::Migration
  def change
    create_table :contacts do |t|
      t.string :name
      t.string :nickname
      t.string :phone
      t.string :email
      t.string :subject
      t.text :body
      
      t.timestamps
    end
  end
end
