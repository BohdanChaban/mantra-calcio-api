clubs = YAML.load(IO.read Rails.root.join('config', 'fixtures', 'clubs.yml'))

clubs.each do |club|
  Club.create(
    name: club,
    code: club[0..2].upcase,
    logo: "https://content.fantagazzetta.com/web/img/team/#{club.downcase}.png"
  )
  p "Club #{club} is successfully created"
end
