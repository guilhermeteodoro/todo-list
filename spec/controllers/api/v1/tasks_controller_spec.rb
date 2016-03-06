require 'rails_helper'
require 'json'

describe API::V1::TasksController do
  let(:task_attributes){ attributes_for :task }
  let(:created_task){ create :task }

  describe 'GET #index' do
    it 'returns http success' do
      get :index
      expect(response).to have_http_status(:success)
    end
  end

  describe 'POST #create' do
    before :each do
      post :create, task: task_attributes
    end

    it 'returns http success' do
      expect(response).to have_http_status(:success)
    end

    it 'returns created task' do
      expect(task_attributes.values - JSON.parse(response.body).values).to eq([])
    end
  end

  describe 'PUT #update' do
    it 'returns http success' do
      created_task.title = 'Some Other Cool Title'

      put :update, id: created_task.id, task: { title: created_task.title }
      expect(response).to have_http_status(:success)
    end
  end

  describe 'DELETE #destroy' do
    it 'returns http success' do
      delete :destroy, id: created_task.id
      expect(response).to have_http_status(:success)
    end
  end
end