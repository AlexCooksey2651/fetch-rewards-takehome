class TransactionSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :payer, :date, :points

  validates :payer, presence: true
  validates :date, presence: true
  validates :points, presence: true, numbericality: { only_integer: true, greater_than_or_equal_to: 0 }
end
