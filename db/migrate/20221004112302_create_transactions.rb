class CreateTransactions < ActiveRecord::Migration[6.1]
  def change
    create_table :transactions do |t|
      t.integer :user_id
      t.string :payer
      t.string :date
      t.integer :points

      t.timestamps
    end
  end
end
