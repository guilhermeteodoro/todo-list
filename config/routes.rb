TodoList::Application.routes.draw do
  root to: 'application#index'

  namespace :api, defaults: { format: :json } do
    namespace :v1 do
      resources :tasks, except: [:new, :show, :edit]
    end
  end
end