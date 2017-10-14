
storybook:
	(cd components && yarn storybook)

build:
	(cd components && yarn build)

serve: build
	serve components/build

cleanup:
	find components/build -type f -name '*.js.map' -delete

deploy: build cleanup
	(cd components/build && now --name laulu.jallu.rodeo --public)

now: deploy
	now alias

