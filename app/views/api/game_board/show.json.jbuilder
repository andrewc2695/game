json.board do
    json.extract! @game_board, :id, :board, :current_player
end