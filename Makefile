.PHONY: build cleanup now

build:
	(cd frontend && yarn build)

cleanup:
	find frontend/build -type f -name '*.js.map' -delete

now: build cleanup
	(cd frontend/build && now --name laulu.jallu.rodeo --public)