Rails.application.routes.draw do
  get 'pages/index'
  get 'pages/edit'

  devise_for :users, controllers: { omniauth_callbacks: 'users/omniauth_callbacks' }
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root to: redirect('pages/index')
end
