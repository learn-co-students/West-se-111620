class Donut < ApplicationRecord
    has_many :orders
    has_many :customers, through: :orders
end
