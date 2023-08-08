class CreateGameBoards < ActiveRecord::Migration[7.0]
  def change
    create_table :game_boards do |t|
      t.string :board
      t.string :string

      t.timestamps
    end
  end
end
