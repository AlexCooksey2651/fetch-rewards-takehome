class Transaction < ApplicationRecord
    belongs_to :user

    validates :payer_id, presence: true
    validates :date, presence: true
    validates :points, presence: true, numericality: { only_integer: true, greater_than_or_equal_to: 0 }
end
