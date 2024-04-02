---
title: 'The Paperless Principal, Part 1: Witness Statements'
date: 2012-05-20T20:45:00.000-07:00
draft: false
url: /2012/05/paperless-principal-part-1-witness.html
---

#### Twitter version: Use ScanSnap, OCR, Hazel, and Boxcar to digitize, notify, and sort all witness statements from students.

Why Go Paperless?
-----------------

One thing I have learned about myself is that I get overwhelmed and bothered by big stacks of paper on my desk. I don't like having people come into my office when there is all that mess, and I don't feel like I can do anything. I also like having access to the things that I need somewhere on my iOS devices, if I am not by my computer.  
  
I recently picked up the great iBook by David Sparks called [Paperless](http://itunes.apple.com/us/book/paperless/id520393162?mt=11&ign-mpt=uo%3D4). It is a great read, and Sparks goes into great detail about how to be paperless. He gives a lot of great tips and walks through many different types of software in screencast format. The screencasts are especially beneficial because I like to try things out, and the screencasts are targeted on specific tasks and show how it looks doing that task in the different programs. It helps seeing what you are reading.  
  
He gives some good tips for naming conventions, and recommends three tips: 1. Assume Senility 2. Always put the date first 3. Always use lower-case. [Here](http://cl.ly/GknF) are our naming conventions as they stand right now. That is subject to change.  

### Old Workflow

1.  Secretaries collect witness statements.
2.  They put them in my box.
3.  I take them from my box and go through them.
4.  I put them in a pile on my desk, or in my to do box on the desk. 
5.  I don't get around to all of them, and I just keep shuffling them from one pile to another. 
6.  When I do finish them, I write the incident number on the witness statements and send them to the principal's office to be filed. 
7.  Occasionally, we need to look at old witness statements. We've needed to find old statements about 10 times this year. So, more than once per month, which means we need a good system to help us find old statements. 

Here are the problems I have with my current workflow (and how I would hope this new workflow solves them):

*   I have to be in my office to deal with any problems (or carry around a big stack of papers). I am often not in my office. Friday, for example, I set my stuff down in my office, and returned once during the day for a couple minutes, and then packed my stuff up at the end of the day. Solution: Digitizing them allows them to be accessible on my phone without having to be in my office. 
*   I end up with piles of witness statements, some of which could have been handled in two minutes by their teacher. Solution: Piles are gone, and I can email the teachers right after reading the statement and forward it on to the them. 
*   My principal certainly doesn't have time to file all the witness statements (neither do any of the secretaries). Solution: Automatic filing, so even if I don't personally deal with the situation, we have it on record that it was reported and we can at least state what was done. 
*   When a parent or student says they have turned in statements about a recurring problem, it would be really beneficial to review them and ensure that we made a correct response the first time. Also, when we need to send a student on to a district-level hearing, we have an easier time collecting documentation relating to that student's history. Solution: Having all the statements in one folder lets me know that they have (or haven't) complained about something before, and even if I didn't deal with it, I can see their history.

### New Workflow

#### Simple idea version

1.  Scan witness statements.
2.  I get notified and deal with the problem.
3.  I rename the file once it is dealt with or solved.

#### How the simple idea version actually works

1.  Secretaries usually collect witness statements.
2.  Secretary puts witness statements that I need to review in the scanner (or sends them right to the teacher if she knows they can deal with it).
3.  Statements are OCR'd as they go through.
4.  Hazel reads contents and when it sees "WITNESS STATEMENT" in the document, it renames it to "witness statement.pdf" and sends it through dropbox to my computer. 
5.  My action folder has a Hazel rule that renames files called "witness statement.pdf" to "to do 2012-05-18 witness statement.pdf".
6.  I get a Growl notification on my iPhone (through [boxcar](http://boxcar.io/site/services/add)) that says "Work - to do 2012-05-18 witness statement".
7.  Then I open my dropbox folder on my phone and see that I have a witness statement in that folder. I can pull the kids out right away, or wait for a bit, depending on the severity. 
8.  When I deal with the problem, I rename the file using Snippets by Conceited Software. The snippet I use is "/wit" which expands to "2012-05-18 witness statement - ##firstname lastname##" where there is a fill-in form for the student's first and last name. (before renaming, I split the multi-page PDF with all the witness statements into a bunch of single-page PDFs and rename them all using the above snippet.)
9.  Once the file is renamed, that means it is completed _and_ logged in our student information system. 
10.  Also, once the file is renamed, Hazel sees the new name that starts with the year, and moves it to the Student Folders folder where...
11.  There is another Hazel rule which sorts it into a subfolder which is alphabetized by student last name(!)!
12.  Then, I have a year's worth (or more) file of all statements by all students that have filled one out!

That is a lot of work to get to this point. Why do it? 

  

I'll highlight some of the steps of my workflow, as they are pretty amazing. 

  

### Scanning

We use a [Fujitsu ScanSnap S1500M](http://www.amazon.com/gp/product/B001XWCQO2/ref=as_li_ss_tl?ie=UTF8&tag=jethrojonesco-20&linkCode=as2&camp=1789&creative=390957&creativeASIN=B001XWCQO2)![](http://www.assoc-amazon.com/e/ir?t=jethrojonesco-20&l=as2&o=1&a=B001XWCQO2) (though all their scanners are pretty amazing from what I have heard). The software can do OCR as it scans, which is what we have it set up to do, and it will also add keywords to a PDF based on highlighted words in the document, which is something I will work on for some other workflows. The scanner is fast, and slick. It rocks. I haven't had any problems with OCR, even with our nonstandard font on our Think Time sheets. My favorite things about this scanner:  
  

*   Scans both sides of the document
*   Automatically deletes a blank back page
*   OCR on all files
*   Automatically adjusts page to correct orientation

  

[![](http://4.bp.blogspot.com/-cPZkwMJyzL8/T7gV5nfjV1I/AAAAAAAACGQ/PRA0e0Hxk0k/s320/scan+snap+preferences.png)](http://4.bp.blogspot.com/-cPZkwMJyzL8/T7gV5nfjV1I/AAAAAAAACGQ/PRA0e0Hxk0k/s1600/scan+snap+preferences.png)

ScanSnap Preferences. Convert to Searchable PDF means OCR.

### Hazel Rules

Search contents for the words WITNESS STATEMENT and MUST USE PEN TO COMPLETE (which are easily OCRized phrases that are on our witness statements and not much else), then rename it as "witness statement" in the scanned folder. 

  

Here are the "sort into subfolders" [rules](http://cl.ly/GkEE) (I use [Hazel 3](http://noodlesoft.com/)) that are run when another Hazel rule sends files to my "Student Folders" folder.  These are all the rules I have set up for that folder, but I'll focus on the witness statement rule, and the rest build off of that. Somehow I found [this cool Hazel](http://iconaholic.posterous.com/better-tv-renaming-sorting-hazel-rules) rule for renaming and automatically sorting files into subfolders, even if you don't have the folder they will end up in already created, which was a new concept for me. I didn't download his examples, because what I needed was different enough that I didn't want to just edit. The key is custom tokens. Use custom tokens and it will be able to use what work you have done to simplify your life later. 

[![](http://4.bp.blogspot.com/-k5UtCwjFPvo/T7gV1RvpCQI/AAAAAAAACF4/eNhOU5ByY7w/s400/custom+rule.png)](http://4.bp.blogspot.com/-k5UtCwjFPvo/T7gV1RvpCQI/AAAAAAAACF4/eNhOU5ByY7w/s1600/custom+rule.png)

Custom Tokens is the key

  

### Boxcar/Growl

One of my favorite parts of this workflow is that I can use my iPhone or iPad to check out the witness statements. When a new witness statement is added to my action folder, a Hazel rule sends a [growl notification](http://growl.info/) (I am not using the app store version of growl) on my computer which stays up until I dismiss it (to ensure that I don't miss any witness statements). I also use [Boxcar](http://boxcar.io/) to send that same notification to my phone. So, on my phone and on my computer are notifications that I have something to deal with. 

[![](http://1.bp.blogspot.com/-ucF6_Qbc9FE/T7gV42cL3AI/AAAAAAAACGA/x_qA3eoqXl8/s1600/2012-05-19_1416.png)](http://1.bp.blogspot.com/-ucF6_Qbc9FE/T7gV42cL3AI/AAAAAAAACGA/x_qA3eoqXl8/s1600/2012-05-19_1416.png)

### Using Files Later

Once I have all the witness statements in the computer, they are in my "Student Folders" folder, organized neatly by student. That is pretty rad, but sometimes I need them. So, I made a smart folder in the finder, which you can see below. This smart folder is called "2012 witness statements" and at the end of the year, I will be able to archive all those and save it is as one large ZIP file that will have every witness statement we collected this year in a neat space. 

[![](http://2.bp.blogspot.com/-dpBU2-XWQzQ/T7gV5H3E-iI/AAAAAAAACGI/L2dKb2WQleU/s640/2012-05-19_1525.png)](http://2.bp.blogspot.com/-dpBU2-XWQzQ/T7gV5H3E-iI/AAAAAAAACGI/L2dKb2WQleU/s1600/2012-05-19_1525.png)

### Continued Obstacles

*   Witness statements from one event are not grouped together, so each student's folder only has his side of the story. I am not sure if the date is the best way to go about organizing them, but right now, it seems like the best (easiest) way. 
*   Not all events worth recording and documenting come with a witness statement, and students aren't always able to fill them out.