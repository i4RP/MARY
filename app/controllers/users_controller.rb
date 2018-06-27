class UsersController < ApplicationController
  def index
  end

  def create
  end

  def new
  end

  def edit
  end

  def show
  end

  def update
    if current_user.update(ethereum_address: params[:address])
      redirect_to pages_path
    else
      redirect_to edit_user_registration_path
    end
  end

  def destroy
  end




end
