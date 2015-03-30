class AddDataToContact < ActiveRecord::Migration
  def change
  	add_column :contacts, :name, :string
  	add_column :contacts, :nickname, :string
  	add_column :contacts, :phone, :string
  	add_column :contacts, :email, :string
  	add_column :contacts, :subject, :string
  	add_column :contacts, :body, :string
  end
end
