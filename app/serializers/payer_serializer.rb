class PayerSerializer < ActiveModel::Serializer
  attributes :id, :name

  has_many :transactions
end
