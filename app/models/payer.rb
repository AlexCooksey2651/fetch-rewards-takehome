class Payer < ApplicationRecord
    has_many :transactions
    has_many :balances

    validates :name, presence: true, uniqueness: true
end
