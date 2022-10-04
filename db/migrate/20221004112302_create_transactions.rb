class CreateTransactions < ActiveRecord::Migration[6.1]
  def change
    create_table :transactions do |t|
      t.integer :user_id
      t.integer :payer_id
      t.string :date
      t.integer :points
      t.integer :remaining

      t.timestamps
    end
  end
end
