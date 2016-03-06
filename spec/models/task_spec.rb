require 'rails_helper'

describe 'Task' do
  let(:task){ build :task }

  it 'has a valid factory' do
    expect(task).to be_valid
  end

  context '#title' do
    it 'can\'t be nil' do
      task.title = nil
      expect(task).to be_invalid
    end

    it 'can\'t be blank' do
      task.title = ''
      expect(task).to be_invalid
    end

    it 'has a minimum of 5 caracters' do
      task.title = 'asd'
      expect(task).to be_invalid
    end

    it 'has a maximum of 100 caracters' do
      task.title = 'asd' * 100
      expect(task).to be_invalid
    end
  end

  context '#done' do
    it 'can\'t be nil' do
      task.done = nil
      expect(task).to be_invalid
    end
  end
end