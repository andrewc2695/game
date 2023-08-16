class AddCurrentPlayerToGameBoard < ActiveRecord::Migration[7.0]
  def change
    add_column :game_boards, :current_player, :string
  end
end
