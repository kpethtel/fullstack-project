Rails.application.routes.draw do
  namespace :api do
    resources :favorites, only: [:create]
  end
end
