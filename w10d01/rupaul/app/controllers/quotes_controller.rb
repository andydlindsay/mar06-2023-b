class QuotesController < ApplicationController
  def index
    queen_id = params[:queen_id] # req.params.queen_id
    @queen = Queen.find(queen_id)
    @quotes = @queen.quotes

    render json: {
      queen: @queen,
      quotes: @quotes
    }
  end
end
