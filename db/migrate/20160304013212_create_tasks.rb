class CreateTasks < ActiveRecord::Migration
  def change
    create_table :tasks do |t|
      t.string :title, limit: 100, null: false
      t.boolean :done, default: false

      t.timestamps
    end
  end
end
