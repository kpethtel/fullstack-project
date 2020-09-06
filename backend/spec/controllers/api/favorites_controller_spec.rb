require 'spec_helper'
require 'rails_helper'

RSpec.describe Api::FavoritesController, type: :controller do
  describe 'POST create' do
    context 'with valid params' do
      it 'returns 201' do
        post :create, params: {favorite: { url: "pow" }}
        puts response.body
        expect(response.status).to eq 201
      end

      it 'creates a favorite' do
        expect do
          post :create, params: {favorite: { url: "pow" }}
        end.to change{ Favorite.count}.by(1)
      end
    end

    it 'returns 422 with invalid params' do
      post :create, params: {}
      expect(response.status).to eq 422
    end
  end
end
