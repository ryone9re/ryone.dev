%:
	@:

server:
	hugo server -D

POST_TITLE := $(word 2,$(MAKECMDGOALS))
post:
	hugo new content blog/$(POST_TITLE).md

.PHONY: server post
