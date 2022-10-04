class TransactionSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :payer_id, :date, :points, :remaining

  belongs_to :user
  belongs_to :payer
end
