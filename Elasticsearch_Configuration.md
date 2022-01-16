1. Follow the step 1 and step 3 in the following manual to install Elasticsearch and logstash (not need to install others):
  https://www.digitalocean.com/community/tutorials/how-to-install-elasticsearch-logstash-and-kibana-elastic-stack-on-ubuntu-18-04

2. To run logstash we need to add its path to environment variable:
   (1) install vim,
   (2) edit .bashrc file by command: vim ~/.bashrc,
   (3) Add "export PATH="/usr/share/logstash/bin/:$PATH" to the end of the file,
   (4) Run command: "source ~/.bashrc"

3. Then follow the tutorial to indexing a csv file:
   https://www.youtube.com/watch?v=_kqunm8w7GI&t=2s
