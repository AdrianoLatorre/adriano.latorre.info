desc 'Start Jekyll'
task :serve do
  sh 'jekyll serve --watch'
end

desc 'Open Chrome'
task :chrome do
  sh 'open /Applications/Google\ Chrome.app/'
end

desc 'Open Mail'
task :mail do
  sh 'open /Applications/Mail.app/'
end

desc 'Open Safari'
task :safari do
  sh 'open /Applications/Safari.app/'
end

desc 'Open Slack'
task :slack do
  sh 'open /Applications/Slack.app/'
end

desc 'Open Sublime'
task :sublime do
  sh 'open /Applications/Sublime\ Text.app/'
end

desc 'Open url'
task :url do
  sh 'sleep 11 && open http://0.0.0.0:4000/ &'
end

desc 'Open alt'
task :a => [:url, :sublime, :serve]

desc 'Open work'
task :w => [:chrome, :mail, :safari, :slack, :sublime]

desc 'Serve and view'
task :s => [:url, :serve]
