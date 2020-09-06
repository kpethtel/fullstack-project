class Api::FavoritesController < ApplicationController
  rescue_from ActionController::ParameterMissing do |exception|
    logger.error exception
    head 422
  end

  def create
    favorite = Favorite.new(permitted_params)
    if favorite.save
      head 201
    else
      head 422
    end
  end

  PERMITTED_PARAMS = %i[format source url search_term]
  private def permitted_params
    params.require(:favorite).permit(*PERMITTED_PARAMS)
  end
end