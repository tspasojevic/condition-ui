FROM registry.see.asseco.com/public/alpine:3
COPY --chown=1001:0 ci/assets/module.json /module/
COPY --chown=1001:0 projects/do-ucbhu-ui/src/lib/assets/ /module/assets/
COPY --chown=1001:0 dist/do-ucbhu-ui/bundles/asseco-see-do-ucbhu-ui.umd.min.js /module/assets/do-ucbhu-ui/