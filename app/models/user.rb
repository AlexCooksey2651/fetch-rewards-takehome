class User < ApplicationRecord
    has_many :transactions

    validates :username, presence: :true, uniqueness: true
end
