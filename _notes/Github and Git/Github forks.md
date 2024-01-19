---
title: Github forks
---
### What the fork? (What is a fork?)
Github docs defines it best:
> A fork is ==a new repository== that shares code and visibility settings with the original “upstream” repository.[^1]

### How can I fork a repository?
First use the `Fork` button on Github to create the repo, then fill the owner and a repo name fields, as well as the optional description field.[^2]

### How can I configure Git to sync my fork with the upstream repository?
You'll want to use the command `git remote add upstream`. First go to the original owner's repository and copy the URL. Then run the following command (making sure to replace the URL with the copied URL from Github):

```shell
git remote add upstream https://github.com/ORIGINAL_OWNER/Spoon-Knife.git
```

Next use `git remote -v` to check the current configured remote repository for your fork. You should have an origin fetch and an origin pull at your repository's URL, and an upstream fetch and upstream pull at the original owner's repository's URL.[^3]

<hr>

Sources/Further reading:

[^1]: Github docs [about forks](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/fork-a-repo#about-forks)
[^2]: Github docs [forking a repository](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/fork-a-repo#forking-a-repository)
[^3]: Github docs [configuring git to sync your fork with the upstream repository](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/fork-a-repo#configuring-git-to-sync-your-fork-with-the-upstream-repository)