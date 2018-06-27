class PagesController < ApplicationController
  def index
    if current_user.ethereum_address.nil?
      redirect_to pages_edit_path
    end
  end
  def edit
    @update = current_user.update(ethereum_address: params[:address])
    current_user.save
    if current_user.ethereum_address.nil?
    else
      redirect_to pages_index_path
    end
  end
end
