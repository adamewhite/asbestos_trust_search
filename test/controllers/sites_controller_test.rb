require 'test_helper'

class SitesControllerTest < ActionController::TestCase
  setup do
    @site = sites(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:sites)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create site" do
    assert_difference('Site.count') do
      post :create, site: { city: @site.city, country: @site.country, end_date: @site.end_date, name: @site.name, site_code: @site.site_code, start_date: @site.start_date, state: @site.state, trust_id: @site.trust_id }
    end

    assert_redirected_to site_path(assigns(:site))
  end

  test "should show site" do
    get :show, id: @site
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @site
    assert_response :success
  end

  test "should update site" do
    patch :update, id: @site, site: { city: @site.city, country: @site.country, end_date: @site.end_date, name: @site.name, site_code: @site.site_code, start_date: @site.start_date, state: @site.state, trust_id: @site.trust_id }
    assert_redirected_to site_path(assigns(:site))
  end

  test "should destroy site" do
    assert_difference('Site.count', -1) do
      delete :destroy, id: @site
    end

    assert_redirected_to sites_path
  end
end
