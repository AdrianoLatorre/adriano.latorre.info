desc 'Start Jekyll'
task :serve do
  sh 'jekyll serve --watch'
end

desc 'Open url'
task :url do
  sh 'open http://0.0.0.0:4000/'
end

desc 'Open Sublime'
task :sublime do
  sh 'open /Applications/Sublime\ Text.app/'
end

desc 'Serve and view'
task :s => [:url, :serve]

desc 'Open alt'
task :a => [:sublime, :url, :serve]

desc 'Open Safari'
task :safari do
  sh 'open /Applications/Safari.app/'
end

desc 'Open Chrome'
task :chrome do
  sh 'open /Applications/Google\ Chrome.app/'
end

desc 'Open Slack'
task :slack do
  sh 'open /Applications/Slack.app/'
end

desc 'Open work'
task :w => [:sublime, :safari, :chrome, :slack]
