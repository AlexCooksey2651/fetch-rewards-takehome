class ExpensesController < ApplicationController

    def create
        user = User.find_by(id: params[:user_id])
        new expense = user.expenses.create!(expense_params)
        
    end

    private 

    def expense_params
        params.permit(:user_id, :payer_id, :points)
    end
end
