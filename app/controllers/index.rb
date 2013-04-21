get '/' do
  # Look in app/views/index.erb
  erb :index
end

get '/game/:game_id' do
  game = Game.find(params[:game_id])
  @game_state = game.status
  erb :game	
end

post '/game/:game_id' do
	
	index = params["td_index"].to_i

	# @player1= @game.players.first
	# @player2 = @game.players.last
	Game.find(params[:game_id]).status[index] = "X"
	@game = Game.find(params[:game_id])
	@game_state = @game.status
	
	erb :game_partials, :layout=>false
end