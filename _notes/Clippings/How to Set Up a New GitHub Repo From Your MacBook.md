---
category: "[[Clippings]]"
author: "[[billydharmawan]]"
title: How to Set Up a New GitHub Repo From Your MacBook
source: https://medium.com/swlh/how-to-set-up-a-new-github-repo-from-your-macbook-fadb6bca2d9a
clipped: 2024-03-02
published: "true"
topics: 
tags:
  - clippings
---

![billydharmawan](https://miro.medium.com/v2/resize:fill:88:88/2*Nhx2FiKECTHrP-DpUnOqMg.jpeg)









[Source](https://medium.com/@billydharmawan?source=post_page-----fadb6bca2d9a--------------------------------)

[The Startup](https://medium.com/swlh?source=post_page-----fadb6bca2d9a--------------------------------)

This article walks you through how to use `git` as your version control tool for your projects. It is assumed that you have already installed `git` on your local machine. If you have not, this is how you do it via `homebrew`:

`MacBook-Pro:~ bobthedude$ brew install git`

Please note that this guide is for **beginners**.

Why did I write this guide? Because the first time I used `git`, I started from my local MacBook, not knowing about `git clone`. So, I thought someone else might do the same thing and this guide would help.

![](https://miro.medium.com/v2/resize:fit:1400/0*-RWdjC2KNTW3zggm)

Again, this is for the case where you already started a local `git` repo before you create a repo on `GitHub` ~ you do not use `git clone`.

## 1\. Create a project folder

MacBook-Pro:~ bobthedude$ mkdir projectdude

## 2\. Initialise local git repo

MacBook-Pro:~ bobthedude$ cd projectdude  
MacBook-Pro:projectdude bobthedude$ git init

## 3\. Add remote git repository

After you initialise your local repo above, you remembered that you have not created a repo on `GitHub`, so you go to [github.com](http://github.com/) and created one called `projectdude`. Grab the repo url and replace `<remote_repo_url>` below.

MacBook-Pro:projectdude bobthedude$ git remote add origin <remote\_repo\_url>

**Alternative** \- You can actually skip step 1, 2, 3 above if you have already created a repository on github.com and do a `git clone <remote_repo_url>` instead. After this, you can follow the below steps.

## 4\. Create a new local branch

Below command will create a local branch named `bob-first-branch`. You can replace it with whatever name you want for your local branch.

MacBook-Pro:projectdude bobthedude$ git checkout -b bob-first-branch

## 5\. Start developing your project

You can check whether you are on the right branch or not by executing below command.