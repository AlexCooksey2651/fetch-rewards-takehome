class BalanceSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :payer_id, :points
end
