class TransactionSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :payer_id, :date, :points

end
