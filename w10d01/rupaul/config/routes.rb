Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  # get 'login', action: :index, controller: 'users'
  # get 'login', to: 'users#index'

  # resources :queens
  # resources :quotes

  resources :queens do
    resources :quotes
  end
end
