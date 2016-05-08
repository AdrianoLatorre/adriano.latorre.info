desc 'Start Jekyll'
task :serve do
  sh 'jekyll serve --watch'
end

desc 'Git status'
task :status do
  sh 'git status'
end

desc 'Concat example'
task :all => [:status, :serve]
