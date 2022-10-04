class User < ApplicationRecord
    has_many :transactions
    has_many :balances

    validates :username, presence: :true, uniqueness: true
end
