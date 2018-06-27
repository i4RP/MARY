Rails.application.routes.draw do
  resources :pages

  devise_for :users, controllers: { omniauth_callbacks: 'users/omniauth_callbacks' }
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :users

  root to: redirect('pages')
end
