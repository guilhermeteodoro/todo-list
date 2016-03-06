class API::V1::TasksController < ApplicationController
  def index
    tasks = Task.done_last

    render json: tasks, root: false
  end

  def create
    task = Task.new(task_params)

    if task.save
      render json: task, root: false
    else
      render json: task.errors.messages, status: :unprocessable_entity
    end
  end

  def update
    if current_task.update_attributes(task_params)
      render json: { head: :no_content }
    else
      render json: task.errors.messages, status: :unprocessable_entity
    end
  end

  def destroy
    current_task.destroy

    render json: { head: :no_content }
  end

  private
  def current_task
    Task.find(params[:id])
  end

  def task_params
    params.require(:task).permit(:title, :done)
  end
end