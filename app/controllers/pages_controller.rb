class PagesController < ApplicationController
protect_from_forgery except: :create # createアクションを除外
 before_action :authenticate_user!
  def index
    if current_user.ethereum_address.nil? == true
      redirect_to edit_user_path(current_user.id)
    else

    end
  end

  def create
  end

  def new
  end

  def edit
  end

  def show
    if current_user.ethereum_address.nil? == true
      redirect_to edit_user_path(current_user.id)
    else

    end
  end

  def update
  end

  def destroy
  end

end
