class ApplicationController < ActionController::Base
  # remove this skip when auth is added
  skip_before_action :verify_authenticity_token
  before_action :set_session
  before_action :authorized
  helper_method :current_user
  helper_method :logged_in?

  # TODO: remove this method
  # this is a temporary hack until user auth can be added
  # this is only being done to enable the concept of user
  # in the code so that less refactoring needs to be done
  # when adding authentication later
  def set_session
    session[:user_id] = 1
  end

  def current_user
    @current_user ||= User.find_by(id: session[:user_id])
  end

  def logged_in?
    !current_user.nil?
  end

  def authorized
    redirect_to '/' unless logged_in?
  end
end
