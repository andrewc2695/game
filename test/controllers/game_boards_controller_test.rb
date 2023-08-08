require "test_helper"

class GameBoardsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @game_board = game_boards(:one)
  end

  test "should get index" do
    get game_boards_url, as: :json
    assert_response :success
  end

  test "should create game_board" do
    assert_difference("GameBoard.count") do
      post game_boards_url, params: { game_board: { board: @game_board.board, string: @game_board.string } }, as: :json
    end

    assert_response :created
  end

  test "should show game_board" do
    get game_board_url(@game_board), as: :json
    assert_response :success
  end

  test "should update game_board" do
    patch game_board_url(@game_board), params: { game_board: { board: @game_board.board, string: @game_board.string } }, as: :json
    assert_response :success
  end

  test "should destroy game_board" do
    assert_difference("GameBoard.count", -1) do
      delete game_board_url(@game_board), as: :json
    end

    assert_response :no_content
  end
end
