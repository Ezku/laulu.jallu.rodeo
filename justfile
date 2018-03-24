
default:
  @just -l

install:
  npm install -g yarn prettier

storybook:
  yarn storybook
