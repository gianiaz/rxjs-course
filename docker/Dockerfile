FROM node:12.18.0-alpine

## SSH et al
RUN apk --no-cache add git zsh

ENV PATH="${PATH}:/home/node/frontend/node_modules/.bin"

USER node
WORKDIR /home/node/frontend

## ZSH / OhMyZsh
COPY --chown=node:node zsh/install-zsh.sh /home/node/install-zsh.sh
RUN chmod +x /home/node/install-zsh.sh \
    && /home/node/install-zsh.sh
COPY --chown=node:node zsh/zsh-config.sh /home/node/.zshrc
