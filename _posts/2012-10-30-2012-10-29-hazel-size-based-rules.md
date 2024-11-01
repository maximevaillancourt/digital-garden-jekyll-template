---
layout: post
title: Hazel Size-Based Rules
categories: []
tags: []
status: publish
type: post
published: true
meta: {}
last_modified_at: 2024-11-01 19:03:49
---

One of the great rules I have set up in Hazel is for our news broadcast each morning. It takes the news from the computer it is recorded on, moves it to my computer (with a little Dropbox help) and then moves it to my public Dropbox folder, where another Hazel rule cleans it out after 3 days.


![News Rule](https://dl.dropbox.com/s/rs7pnngr1quyljz/cougar%20news%20rule.png)
 
Pretty slick, eh?


One problem that I have had is that it has to compress and export from the recording machine, and that can take up to 20-30 minutes. What that means is that I have to wait to run my Hazel rule for 20-30 minutes.


But here is the real problem. When the program I use (
[BoinxTV](http://boinx.com/boinxtv/overview/)) starts exporting, it saves a "placeholder" file to the export location. And its size is Zero bytes, which means that Hazel sees the name of the file, and sees that it has been 20 minutes and then acts on that rule.[1]


![Zero Bytes](https://dl.dropbox.com/s/qqe96plh3ygvvgu/zero%20bytes.png)


I figured out a solution today in the middle of a meeting. It came to me like a bolt of lightning. All I had to do was add a little condition to my rule. I set it to only move the file if the size is greater than 0 bytes. That way, it works. Dropbox doesn't update the file incrementally. Dropbox shows the file as 0 bytes or the full 50 MB, and so it is a simple way around that.


![Fixed News Rule](https://dl.dropbox.com/s/88r7hea1ekerrqa/news%20updated.png?dl=1)


This also works with files that are scanned using the ScanSnap. The ScanSnap software also saves a placeholder file while it does OCR on the documents that are scanned. It can take a while when you scan many pages. This size rule can work for those as well.


[1]: The problem with Zero bytes is that Hazel would move the zero-byte-sized file from its location and then the BoinxTV software would not have a placeholder file to write to, so it basically made that file disappear. At least I could never find out where it went!
