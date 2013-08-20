get '/' do
  # Look in app/views/index.erb
  erb :index
end

post '/color' do
  content_type :JSON
  cell= rand(1..9)
  color= "#" + "%06x" % (rand * 0xffffff)

  #Create and return a JSON object with the random cell and color given below.
  {:cell => cell, :color => color}.to_json
  # alternatively:
  # JSON.generate({cell: cell, color: color})
end