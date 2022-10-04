class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :transactions, :expenses

  has_many :transactions
  has_many :expenses
end
