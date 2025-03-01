FROM ubuntu:22.04

ENV DEBIAN_FRONTEND=noninteractive

RUN apt-get update && apt-get install -y curl python3 python3-pip build-essential git nginx && rm -rf /var/lib/apt/lists/*

RUN curl -fsSL https://deb.nodesource.com/setup_current.x | bash - && apt-get install -y nodejs

RUN curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh -s -- -y

ENV PATH="/root/.cargo/bin:${PATH}"

RUN rustup update stable

WORKDIR /app

RUN git clone https://github.com/DevSnippy/codeRace.git .

WORKDIR /app/server/nodeJs_server
RUN npm install

WORKDIR /app/server/python_server
RUN python3 -m pip install --upgrade pip
RUN python3 -m pip install -r requirements.txt
RUN python3 -m pip install gunicorn

WORKDIR /app/server/rust_server
RUN cargo build --release
WORKDIR /app/client
RUN npm install
RUN npm run build

RUN rm -rf /var/www/html/*
RUN cp -r build/* /var/www/html/
COPY nginx/nginx.conf /etc/nginx/sites-available/default
EXPOSE 3000

WORKDIR /app/server
RUN cp jsons/10mb.json rust_server/target/release/
CMD ["/bin/bash", "-c", "echo 'Starting Node server on 3001...'; (cd /app/server/nodeJs_server && node main.mjs) & echo 'Starting Python server on 3002...'; (cd /app/server/python_server && gunicorn -w 4 -b 0.0.0.0:3002 app:app) & echo 'Starting Rust server on 3003...'; (cd /app/server/rust_server && ROCKET_ADDRESS=0.0.0.0 ROCKET_PORT=3003 ./target/release/server) & echo 'Starting Nginx on 8080...'; nginx -g 'daemon off;'"]
