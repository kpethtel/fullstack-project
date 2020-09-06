require 'spec_helper'
require 'rails_helper'

RSpec.describe Api::FavoritesController, type: :controller do
  describe 'POST create' do
    it 'returns 201 with valid params' do
      post :create, params: {favorite: { url: "pow" }}
      expect(response.status).to eq 201
    end

    it 'returns 422 with invalid params' do
      post :create, params: {}
      expect(response.status).to eq 422
    end
  end
end
