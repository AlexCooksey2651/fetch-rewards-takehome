class TransactionSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :payer, :date, :points
end
