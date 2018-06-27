class PagesController < ApplicationController
  def index
    if user_signed_in?
      if current_user.ethereum_address.nil? == true
        redirect_to pages_edit_path
      else
        redirect_to user_twitter_omniauth_authorize_path
      end
    end
  end
  def edit
    if @addressup = current_user.update(ethereum_address: params[:address])
      current_user.save
    else
      redirect_to pages_index_path
    end
  end
end
