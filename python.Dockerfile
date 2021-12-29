FROM artifactory.turkcell.com.tr/local-docker-3rd-party/com/turkcell/noderunner/node_dos2unix_jq_python:011 AS client_build
WORKDIR /tmp          
COPY . /tmp/

RUN npm install --registry https://artifactory.turkcell.com.tr/artifactory/api/npm/npm/ && \
    npm run build
    
RUN chmod +rwx /tmp/docker-entrypoint.sh && \                  
    dos2unix /tmp/docker-entrypoint.sh   

EXPOSE 3000

#ENTRYPOINT ["/bin/bash", "-c", "node /tmp/dist/main"]  //OK
ENTRYPOINT ["/tmp/docker-entrypoint.sh"] // OK
#ENTRYPOINT [ "node","/tmp/dist/main" ] #OK



