---
title: 'How to Merge PDFs on a Mac'
date: 2010-04-29T10:53:00.000-07:00
draft: false
url: /2010/04/how-to-merge-pdfs-on-mac.html
tags: 
- combine PDFs
- PDFs
- automator
- mac
---

**Twitter Version:** Create an automator workflow that gets files from Finder and combines them to a single PDF.

  

  

[](http://1.bp.blogspot.com/_wrorMsBZYW0/S9nMpasoKNI/AAAAAAAABvA/obZwxwLeuWs/s1600/workflow-1.png)I got this hint from the comments on [MacOSxhints.com](http://www.macosxhints.com/) while trying to merge PDFs for a class I am teaching. I scanned in a few pages from a book, and the scanner created separate PDF files. For my students, I knew it would be easier if they were one PDF, so I wanted to merge them. According to [this article](http://www.macosxhints.com/article.php?story=20071114191806624), you can do that in Preview, which is fine, except that there is no way to save them as one file. So, I read this in one of the comments:

  

> The simplest (and least expensive) way is to create a 2-step Automator application that containds the following automator steps:  
>   
> 1: Ask for Finder Items (allow multiple selection) - to select the images/pdf files  
> 2\. New PDF From Images or  
> 2: Combine PDF Pages  
>   
> This will save a single file with all your desired scanned images into one file.  
>   
> \---  
> D. Brownstone

  
  
So, I did that, and it worked perfectly. Here is my revised workflow:  
[![](http://2.bp.blogspot.com/_wrorMsBZYW0/S9nJ7OW6yaI/AAAAAAAABu4/6mVvT6-QGPQ/s400/Workflow.png)](http://2.bp.blogspot.com/_wrorMsBZYW0/S9nJ7OW6yaI/AAAAAAAABu4/6mVvT6-QGPQ/s1600/Workflow.png)  
  
You'll see that I added a couple steps:

*   Name Single Item in Finder Item Names
*   Add Date or Time to Finder Item Names
*   Move Finder Items

These three actions will rename the new combined file to a name I chose ("Combined PDF" in this case), append a date and time to the beginning of the filename, and move it to my desktop: "2010-o4-29 Combined PDF.pdf"

  

Alternatively, if you don't want it to always be named "Combined PDF" you can check the box "Show this action when the workflow runs" (in Options on the "Name Single Item in Finder Item Names" action) and it will prompt you for a new name every time you run this workflow.

  

  

![](http://1.bp.blogspot.com/_wrorMsBZYW0/S9nMpasoKNI/AAAAAAAABvA/obZwxwLeuWs/s400/workflow-1.png)

  

  

  

If you have Snow Leopard and you want to make this even cooler, you can create a new Service in Automator instead of a workflow, and then at the top of the service workflow, choose service receives selected "PDF files" in "any application" and the rest will be the same. (Although, don't tell the services workflow to show the action when the workflow runs because it won't.) Now, you can just create a shortcut that combines selected PDFs.

  

Have a Good Life.