desc 'Start Jekyll'
task :serve do
  sh 'jekyll serve --watch'
end

desc 'Open url'
task :open do
  sh 'open http://0.0.0.0:4000/'
end

desc 'Serve and view'
task :s => [:open, :serve]
