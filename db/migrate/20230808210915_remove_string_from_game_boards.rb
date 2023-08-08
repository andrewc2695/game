class RemoveStringFromGameBoards < ActiveRecord::Migration[7.0]
  def change
    remove_column :game_boards, :string, :string
  end
end
