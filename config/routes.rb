Rails.application.routes.draw do
  resources :transactions
  resources :users
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  # route to test your configuration
  get '/hello', to: 'application#hello_world'
end
