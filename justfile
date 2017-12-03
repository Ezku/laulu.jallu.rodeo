
default:
  @just -l

install:
  npm install -g yarn prettier now

prettier:
  prettier components/src/**/*.* --write

storybook:
  just components/storybook

cleanup:
  just data/cleanup
  just components/cleanup
  just site/cleanup

build: cleanup
  just data/build
  just components/build
  just site/build

# FIXME
# deploy: build
#   (cd site && now --name laulu.jallu.rodeo --public)

now: deploy
  now alias

