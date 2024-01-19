---
title: Syncing a github fork with the upstream repo
---
The first step is to have a fork set up with a remote pointing to the upstream repo. Make sure to follow the directions on [[Github forks]] when setting this up.

Once you have your fork set up and configured with the upstream remote, you can use the command line to `git fetch upstream` and then `git merge upstream/main`.[^1]

<hr>
Sources/Further reading:

[^1]: Github docs [syncing a fork branch from the command line](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/syncing-a-fork#syncing-a-fork-branch-from-the-command-line)
