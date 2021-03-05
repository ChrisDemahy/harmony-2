module ApplicationCable
  class Connection < ActionCable::Connection::Base
    # include ActionController::HttpAuthentication::Token::ControllerMethods
    # identified_by :current_user

    # def connect
    #   self.current_user = User.find(find_verified_user)
    # end

    # private

    # def find_verified_user
    #   if request.headers['Authorization'].present?
    #     authenticate_or_request_with_http_token do |token|
    #       begin
    #         jwt_payload = JWT.decode(token, 'my-secret').first
    #         @current_user_id = jwt_payload['id']
    #       rescue JWT::ExpiredSignature, JWT::VerificationError, JWT::DecodeError
    #         reject_unauthorized_connection
    #       end
    #       return @current_user_id
    #     end
    #   else
    #     reject_unauthorized_connection
    #   end
    # end
  end
end
