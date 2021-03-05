class ChatChannel < ApplicationCable::Channel
  def subscribed
    # corresponds to redis channel
    stream_from 'chat_channel'

    # Get all messages to send to client on initial connect
    messages = Message.all

    # Broadcast those messages
    ActionCable.server.broadcast(
      'chat_channel',
      type: 'all_messages', message_history: messages
    )
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end

  def speak; end
end
