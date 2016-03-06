TodoList::Application.routes.draw do
  namespace :api, defaults: { format: :json } do
    namespace :v1 do
      resources :tasks, except: [:new, :show, :edit]
    end
  end
end