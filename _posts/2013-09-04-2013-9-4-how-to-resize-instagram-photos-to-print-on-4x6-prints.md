---
layout: post
title: How to resize Instagram photos to print on 4x6 prints
categories: []
tags:
- hazel
status: publish
type: post
published: true
meta: {}
last_modified_at: 2024-11-01 19:03:49
---

[ ](https://discussions.apple.com/message/20904061#20904061?ac_cid=op123456%2320904061)Instagram is a pretty popular web site. I use it occasionally, but my wife uses it much more than I do. I recently bought her a calendar of her Instagram pictures, because she is always trying to figure out a way to print those pictures out. 

 

The problem is that square pictures don't print out very well in our portrait and landscape life. 

She searched around on the internet and found 
[this gem](https://discussions.apple.com/message/20904061#20904061?ac_cid=op123456%2320904061) (
[https://discussions.apple.com/message/20904061#20904061?ac_cid=op123456#20904061](https://discussions.apple.com/message/20904061#20904061?ac_cid=op123456%2320904061)) . 

Pretty awesome, but I wanted something a little more automated. 

So, I tweaked it a bit. 

##Step 1. IFTTT Rule: 
[Instagram to Dropbox](https://ifttt.com/recipes/31848). 


Ifttt.com is a great automation web site. I'll let them explain it 
[here](https://ifttt.com/wtf). 





This rule saves every Instagram picture my wife takes to the dropbox folder ifttt/instagram.

##Step 2. Automator Application




 
































































 

  
  
    
![The updated automator application (saved in my applications folder) ](/squarespace_images/content_v1_4fffa949e4b0b4590d67b4e7_1378330212694-7KHHIRQ9ZKHVJLYQ6X4Y_Screen+Shot+2013-09-04+at+3.09.00+PM.png_)
        
          
        

        
          
          
The updated automator application (saved in my applications folder) 
  






I changed the original automator actions to copy the finder files (to a folder on the desktop), then scale them to 4000, then I pasted the AppleScript from the directions (also seen below). Now I have an App that can run when images are "Opened with..." it.

But wait, there's more!

























##Step 3: Hazel rule
































































 

  
  
    
![Hazel bringing up the rear](/squarespace_images/content_v1_4fffa949e4b0b4590d67b4e7_1378330892417-GM0RFSXGN6L6IHFAKNL4_Hazel+rule_)
        
          
        

        
          
          
Hazel bringing up the rear
  






What this Hazel rule does is scan the IFTTT/Instragram folder for new images. Once those images are found, it opens them with the app created in Step 2, and colors them green so you know they have been processed (copied to the ready to print folder, and scaled up to print easily on 4x6 paper).  

##Wrap up: 


Now, whenever my wife posts a picture on Instagram, IFTTT will download it to her computer, then Hazel and Automator will resize it and move it to a folder on her desktop.  How awesome is that? 

What this means is that whenever she finds a deal on 4x6 prints, or wants to print a bunch at once, she will have a folder ready to be uploaded to a print service.   



##Bonuses:


If you don't have Hazel, or want to select your photos from iPhoto to be resized and padded for a 4x6, you can use this automator app. To use this, just select the photos you want to print while you are in iPhoto, and launch this 
[app](/s/printinstagramapp.zip). If that app doesn't work, the screenshot for the automator application is below the code.

Here is the code for the AppleScript: 























on run {input, parameters}

 

          repeat with each_image in input

 

                    tell application "Image Events"

 

  launch

 

                              set next_image to (open each_image)

 

                              pad next_image to dimensions {6000, 4000} with pad color {65535, 65535, 65535}

 

                              save next_image with icon

 

  close next_image

 

                    end tell

 

 

          end repeat

 

          tell application "Image Events" to quit

          return input

end run









































 

  
  
    
![Less-automated version.  ](/squarespace_images/content_v1_4fffa949e4b0b4590d67b4e7_1378331780533-A1XNE1SUVXEK2O1STUYK_printinstagram.png_)
        
          
        

        
          
          
Less-automated version.  
