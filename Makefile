.PHONY: storybook build serve cleanup now

storybook:
	(cd frontend && yarn storybook)

build:
	(cd frontend && yarn build)

serve: build
	serve frontend/build

cleanup:
	find frontend/build -type f -name '*.js.map' -delete

now: build cleanup
	(cd frontend/build && now --name laulu.jallu.rodeo --public)