class TaskSerializer < ActiveModel::Serializer
  attributes :id, :title, :done, :created_at, :updated_at
end