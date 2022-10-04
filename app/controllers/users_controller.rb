class UsersController < ApplicationController

    def create
        new_user = User.create(user_params)
        render json: new_user, status: :created
    end

    def show
        user = User.find_by(name: )
        if user
            render json: user, status: :ok
        else
            render json: { error: "User not found" }, status: :not_found
        end
    end

    private

    def user_params
        params.permit(:name)
    end
end
