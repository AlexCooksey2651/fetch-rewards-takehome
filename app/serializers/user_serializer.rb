class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :transactions

  has_many :transactions
end
