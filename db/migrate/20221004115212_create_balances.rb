class CreateBalances < ActiveRecord::Migration[6.1]
  def change
    create_table :balances do |t|
      t.integer :user_id
      t.integer :payer_id
      t.integer :points

      t.timestamps
    end
  end
end
