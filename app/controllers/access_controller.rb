class AccessController < ApplicationController

	before_action :confirm_logged_in, :except => [:login, :attempt_login, :logout]

  def menu
  	#display text & links
  end

  def login
  	#login form
  end

  def attempt_login
    if params[:username].present? && params[:password].present?
      found_user = User.where(:username => params[:username]).first
      if found_user
        authorized_user = found_user.authenticate(params[:password])
      end
    end

    if authorized_user
      session[:user_id] = authorized_user.id
      flash[:notice] = 'You are now logged in.'
      redirect_to(sites_path)
    else
      flash.now[:notice] = 'Please try again.'
      render('login')
    end

  end

  def logout
    session[:user_id] = nil
    flash[:notice] = 'You are now logged out.'
    redirect_to(access_login_path)
  end

end
